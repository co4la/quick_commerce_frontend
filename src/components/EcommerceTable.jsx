import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

require('../styles/ecommerce_table.scss');

const PER_PAGE_COUNT = 12;

class ProductList extends React.Component {
  renderProducts() {
    const products = this.props.products;
    let rows = [];
    
    for (let i=0; i<products.length; i+=4) {
      rows.push(
        <div key={i} className='product_row'>
          {products.slice(i,i+4).map((product, index) => {
            return <img key={index} className='product_image' src={product.image_url} />
          })}
        </div>
      );
    }
    return rows;
  }

  render() {
    return (
      <div className="product_list">
        {this.renderProducts()}
      </div>
    )
  }
}

export default class App extends React.Component {
  constructor() {
    super();

    this.state = { 
      products: []
    };
  }

  //componentDidMount() {
    //this.loadProducts();
  //}

  //loadProducts() {
    //axios.get('http://localhost:3000/api/v1/products', {
      //params: {
        //page: this.state.page 
      //}
    //})
    //.then(products => {
      //this.setState({ products: products.data.products });
    //});
  //}

  //TODO: iffy because that means every time we get a new shop, we only render the first 12
  //      may cause issues cus we may want to keep it at a certain page. but receiving the props
  //      will cause it to always render the first 12 (per page count)

  componentWillReceiveProps(newProps) {
    this.setState({
      products: newProps.products.slice(0, PER_PAGE_COUNT)
    });
    //debugger;
    //this.handlePageClick({selected: 0});
  }

  handlePageClick(data) {
    const page = data.selected;
    const offset = page * PER_PAGE_COUNT;

    this.setState({
      products: this.props.products.slice(offset, offset + PER_PAGE_COUNT)
    });

    //this.setState({ page }, () => {
      //this.loadProducts();
    //});
  }

  render() {
    return (
      <div>
        <ProductList products={this.state.products} />
        <ReactPaginate previousLabel={"<"}
                       nextLabel={">"}
                       pageCount={8}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={8}
                       onPageChange={this.handlePageClick.bind(this)}
                       containerClassName={"paginator"}
                       />
      </div>
    );
  }
}
