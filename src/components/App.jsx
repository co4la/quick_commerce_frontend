import React from 'react';
import EcommerceTable from './EcommerceTable.jsx';
import Header from './Header.jsx';

export default class App extends React.Component {
  //constructor() {
    //super();

    //this.state = {
      //shopId: null
    //}
  //}

  componentDidMount() {
    this.getShopId();
  }

  getShopId() {
    axios.get('http://localhost:3000/api/v1/users/1')
      .then(user => {
        this.setState({
          shopId: user.data.user.shop_id
        });
      });
  }
  
  render() {
    return (
      <div>
        <Header shopId={this.state.shopId} />
        <EcommerceTable shopId={this.state.shopId} />
      </div>
    );
  }
}

//header comonent
