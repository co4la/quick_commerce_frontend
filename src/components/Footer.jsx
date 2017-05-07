import React from 'react';

require('../styles/footer.scss');

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h4>{this.props.shop.location}</h4>
        <div className="link-icons">
          <i className="fa fa-facebook-square"></i>
          <i className="fa fa-twitter-square"></i>
        </div>
      </footer>
    )
  }
}
