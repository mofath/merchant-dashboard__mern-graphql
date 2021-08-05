import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Card = ({ image, title, description }) => {
  return (
    <div className='card'>
      <img src={image} alt='' />
      {title || description ? (
        <div className='card__details'>
          {title && <h3 className='card__details__title'>{title}</h3>}
          {description && <p className='card__details__desc'>{description}</p>}
        </div>
      ) : null}
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
