import React from 'react';
import { withRouter } from 'react-router-dom';

import { storage } from '../../services/storage/storage';
class Login extends React.Component {

    loginSuccessfull = () => {
    }

    loginToSpotify = (e) => {
      const client_id = '72d87e0820ae4f2e8794d583658d7d45'; // Your client id
      const redirect_uri = window.location.origin + '/proxy';

      function getLoginURL(scopes) {
        return 'https://accounts.spotify.com/authorize?client_id=' + client_id +
                '&redirect_uri=' + encodeURIComponent(redirect_uri) +
                '&scope=' + encodeURIComponent(scopes.join(' ')) +
                '&response_type=token';
      }

      let url = getLoginURL([
        'user-read-email'
      ]);

        /* eslint-disable */
        let width = 450,
            height = 730,
            left = (screen.width / 2) - (width / 2),
            top = (screen.height / 2) - (height / 2);
        /* eslint-enable */

      let handleMessage = (event) => {
     
        var hash = JSON.parse(event.data);
        console.log(hash);
        if (hash.type == 'access_token') {
          storage.setToken(hash.access_token);
          const epochDateInSec = Math.floor(new Date().valueOf() / 1000);
          storage.setLoginDate(epochDateInSec);

          window.removeEventListener('message', handleMessage, true);
          this.props.loginSuccessfull();
          this.props.history.push('/search');
        }
      };

      window.addEventListener('message', handleMessage, true);
      window.open(url,
        'Spotify',
        'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
      );
    }

    render() {
      return (
        <button className="btn " onClick={this.loginToSpotify}>
                Log in to Spotify
        </button>
      );
    }
}

export default withRouter(Login);