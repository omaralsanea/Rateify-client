import React from 'react';
import { Link } from 'react-router-dom';

const ArtistCard = ({ _id, name, img }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet px-4">
      <Link to={`/artists/${_id}`}>
        <h2 className="is-centered card-header-title is-size-5 mb-2 has-text-white">
          {name}
        </h2>

        {/* <div className="card-image"> */}
        <figure className="image is-1by1 artist-img">
          <img src={img} alt={name} className="is-rounded" />
        </figure>
        {/* </div> */}
      </Link>
    </div>
  );
};

export default ArtistCard;
