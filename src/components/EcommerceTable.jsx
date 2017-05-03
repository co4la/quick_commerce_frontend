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

export default class EcommerceTable extends React.Component {
  constructor() {
    super();

    this.state = { 
      page: 0
    };
  }

  selectedPageProducts() {
    const products = this.props.products;
    const page = this.state.page;
    const offset = page * PER_PAGE_COUNT;
    
    return products.slice(offset, offset + PER_PAGE_COUNT);
  }

  handlePageClick(data) {
    this.setState({ page: data.selected });
  }

  render() {
    return (
      <div>
        <ProductList products={this.selectedPageProducts()} />
        <ReactPaginate previousLabel={"<"}
                       nextLabel={">"}
                       pageCount={8}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={8}
                       onPageChange={this.handlePageClick.bind(this)}
                       containerClassName={"paginator"} />
      </div>
    );
  }
}
