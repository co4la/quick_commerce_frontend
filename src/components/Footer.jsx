import React from 'react';

require('../styles/footer.scss');

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h4>{this.props.shop.location}</h4>
        <div className="link-icons">
          <a href={this.props.shop.facebook_url}><i className="fa fa-facebook-square"></i></a>
          <a href={this.props.shop.twitter_url}><i className="fa fa-twitter-square"></i></a>
        </div>
      </footer>
    )
  }
}
