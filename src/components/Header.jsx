import React from 'react';

require('../styles/header.scss');

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={this.props.shop.shop_image_url} />
        <div className="shop-info">
          <h1>{this.props.shop.name}</h1>
          <h3>{this.props.shop.location}</h3>
        </div>
      </header>
    );
  }
}
