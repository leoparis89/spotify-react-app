import {storage} from '../storage/storage';
import {getCurrentEpochInSec} from '../utils/date';

export const oAuthLogin = (opt = {}) => {
  return new Promise ((resolve) => {
    const client_id = '72d87e0820ae4f2e8794d583658d7d45'; // Your client id
    const redirect_uri = window.location.origin + '/proxy';
  
    function getLoginURL(scopes) {
      return 'https://accounts.spotify.com/authorize?client_id=' + client_id +
                '&redirect_uri=' + encodeURIComponent(redirect_uri) +
                '&scope=' + encodeURIComponent(scopes.join(' ')) +
                '&response_type=token';
    }
  
    let url = getLoginURL([
      'user-read-email',
      'user-library-modify',
      'user-library-read',
      'user-library-modify',
      'streaming',
      'user-read-birthdate',
      'user-read-email',
      'user-read-private'
    ]);

    let width = 450,
      height = 730,
      left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);
  
    // resolve();

    let handleMessage = (event) => {
      let hash;
      try {
        hash = JSON.parse(event.data);
      } catch (e) {
        console.warn('this data didn\'t contain a hash...', hash, e);
      }

      if (hash && hash.type === 'access_token') {
        console.log('access ok');
        storage.setToken(hash.access_token);
        const epochDateInSec = getCurrentEpochInSec();
        storage.setLoginDate(epochDateInSec);
  
        window.removeEventListener('message', handleMessage, true);
        console.log('res');
        resolve();
        // this.props.loginSuccessfull();
        // this.props.history.push('/search');
      }
    };
  
    window.addEventListener('message', handleMessage, true);

    const {covert} = opt;
    if (covert) {
      window.open(url,
        'theFrame'
      );
    } else {
      window.open(url,
        'Spotify',
        'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
      );
    }
  });
};
