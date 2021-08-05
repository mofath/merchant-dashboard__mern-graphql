import React from 'react';
import Headline from '../../patterns/Headline';
import Card from '../../components/Card';
import PropTypes from 'prop-types';
import './index.scss';

const PartnersContainer = ({ partners }) => {
  return (
    <div className='partners-container'>
      <Headline
        headline='Partenrs'
        semanticElement='h1'
        alignmentDesktop='center'
      />
      <ul className='partners-container__list'>
        {partners.map((item) => (
          <li key={item.id}>
            <Card image={item.image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

PartnersContainer.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PartnersContainer;
