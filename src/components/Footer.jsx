import React from 'react';

require('../styles/footer.scss');

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        {this.props.shop.location}
      </footer>
    )
  }
}
