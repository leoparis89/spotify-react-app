import React from 'react';
import { getArtistAlbums } from '../../services/spotify/spotify';

class ArtistProfileContainer extends React.Component {
    state = {

    }

    componentDidMount() {
        const id = this.props.match.params.artistId;
        getArtistAlbums(id).then(artist => {

        }).catch(err => {

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