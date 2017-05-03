import React from 'react';
import axios from 'axios';

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      shopImageUrl: ""
    }
  }

  componentDidMount() {
    this.loadMainImage();
  }

  loadMainImage() {
    axios.get('http://localhost:3000/api/v1/users/2')
        .then(user => {
          debugger;
          this.setState({
            shopImageUrl: user.data.user.shop_image_url
          });
        });
  }

  
  render() {
    return (
      <div className="header">
        <img src={this.state.shopImageUrl} />
      </div>
    );
  }
}
