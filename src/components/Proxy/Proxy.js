import React from 'react';
import PropTypes from 'prop-types';

class Proxy extends React.Component {
  state = {}

  componentDidMount() {
    var hash = {};
    this.props.location.hash.replace(/^#\/?/, '').split('&').forEach(function (kv) {
      var spl = kv.indexOf('=');
      if (spl !== -1) {
        hash[kv.substring(0, spl)] = decodeURIComponent(kv.substring(spl + 1));
      }
    });

    if (hash.access_token) {
      window.opener.postMessage(JSON.stringify({
        type: 'access_token',
        access_token: hash.access_token,
        expires_in: hash.expires_in || 0
      }), window.location.origin);
      window.close();
    }
  }

  render() {
    return (
      <div>
        hello   {this.props.location.hash}
      </div>
    );
  }
}

export default Proxy;

Proxy.propTypes = {
  location: PropTypes.shape(
    {
      hash: PropTypes.string
    }
  )
};
