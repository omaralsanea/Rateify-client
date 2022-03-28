import React from 'react';
import { Link } from 'react-router-dom';

const ArtistCard = ({ _id, name, img }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/artists/${_id}`}>
        <div className="card">
          <div className="card-header">
            <h2 className="card-header-title">{name}</h2>
          </div>
          {/* <div className="card-image"> */}
          <figure className="image image-is-1by1">
            <img src={img} alt={name} className="is-rounded" />
          </figure>
          {/* </div> */}
        </div>
      </Link>
    </div>
  );
};

export default ArtistCard;
