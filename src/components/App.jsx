import React from 'react';
import axios from 'axios';

import Header from './Header.jsx';
import EcommerceTable from './EcommerceTable.jsx';
import Footer from './Footer.jsx';

require('../styles/app.scss');

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      shop: {},
      products: []
    }
  }

  componentDidMount() {
    this.loadUserShop();
  }

  loadUserShop() {
    axios.get('http://localhost:3000/api/v1/users/2')
      .then(user => {
        this.setState({
          shop: user.data.user.shops[0],
          products: user.data.user.shops[0].products
        });
      });
  }

  render() {
    return (
      <div>
        <Header shop={this.state.shop} />
        <EcommerceTable products={this.state.products} />
        <Footer shop={this.state.shop}/>
      </div>
    );
  }
}
