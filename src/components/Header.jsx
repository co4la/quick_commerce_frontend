import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={this.props.shop.shop_image_url} />
      </div>
    );
  }
}
