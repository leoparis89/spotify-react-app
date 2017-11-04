import React from 'react';
import { spotifyService } from '../../services/spotify/spotify';

class ArtistProfileContainer extends React.Component {
    state = {

    }

    componentDidMount() {
        const id = this.props.match.params.artistId
        spotifyService.getArtistAlbums(id).then(artist => {
            debugger
        }).catch(err => {
            debugger
        });
    }

    render() {
        return (
            <div>
                bar
            </div>
        );
    }
}

export default ArtistProfileContainer;