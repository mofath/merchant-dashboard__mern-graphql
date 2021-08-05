import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as PinterestIcon } from '../../assets/icons/pinterest.svg';

const Icons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  pinterest: PinterestIcon,
};

export default function Icon({ name, ...props }) {
  const IconComponent = Icons[name];

  return (
    <div className='icon' {...props}>
      <IconComponent />
    </div>
  );
}

Icon.propTypes = {
  name: PropTypes.string,
};
