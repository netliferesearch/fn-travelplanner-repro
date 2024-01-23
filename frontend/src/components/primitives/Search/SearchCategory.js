import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

function SearchCategory({ label, icon }) {
  return (
    <div
      className="
        bg-grey-light flex
        items-center py-2
        px-4
      "
    >
      <Icon
        icon={icon}
        className="
          mr-2
          align-middle
        "
        strokeColor="black"
      />
      <h4>{label}</h4>
    </div>
  );
}

SearchCategory.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.string.isRequired,
};

export default SearchCategory;
