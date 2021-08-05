import React from 'react';
import Headline from '../../patterns/Headline';
import Card from '../../components/Card';
import PropTypes from 'prop-types';
import './index.scss';

const FeaturesContainer = ({ features }) => {
  return (
    <div className='features-containers' >
      <Headline
        headline='Dashboard Features'
        semanticElement='h1'
        alignmentDesktop='center'
      />
      <ul className='features-containers__list'>
        {features.map((item) => (
          <li key={item.id}>
            <Card
              title={item.title}
              image={item.image}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

FeaturesContainer.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeaturesContainer;
