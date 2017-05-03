import React from 'react';
import Header from './Header.jsx';
import EcommerceTable from './EcommerceTable.jsx';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      shop: {}
    }
  }

  componentDidMount() {
    this.loadUserShop();
  }

  loadUserShop() {
    axios.get('http://localhost:3000/api/v1/users/1')
      .then(user => {
        this.setState({
          shop: user.data.user.shops[0]
        });
      });
  }
  
  render() {
    return (
      <div>
        <Header shopId={this.state.shop} />
        <EcommerceTable shop={this.state.shop.products} />
      </div>
    );
  }
}
