import React from 'react';
const Artist = (props) => {

  const {id, name, release_date, label, album_type, artists, image, tracks} = props;
  const url = 'https://open.spotify.com/embed?uri=spotify%3Aalbum%3A2rp5riHULWgrXPsDtsp1ir';

  // const url = `https://open.spotify.com/embed?uri=spotify%3Aalbum%${id}`;
  return (
    <div>
      <div className="container">

        <div className="row">
          <div className="col-6">
            <img src={image}
              className="img-fluid"
              alt={name} />
          </div>
          <div className="col-6">
            <h3>{name}  </h3>
            <iframe src={url} width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
            {/*<h4>tracks: </h4>*/}
            {/*<ul class="list-group">*/}
            {/*{tracks.map(track => {*/}
            {/*return (<li className="list-group-item">{track.name}</li>);*/}
            {/*})}*/}
            {/*</ul>*/}
          </div>
        </div>
      </div>
    </div>);
};

export default Artist;
