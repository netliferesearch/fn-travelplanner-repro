import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ImageGalleryContext = createContext({
  galleryIsFullscreen: false,
});

const ImageGalleryProvider = ({ children }) => {
  const [galleryIsFullscreen, setGalleryIsFullscreen] = useState(false);

  return (
    <ImageGalleryContext.Provider
      value={{
        galleryIsFullscreen,
        setGalleryIsFullscreen,
      }}
    >
      {children}
    </ImageGalleryContext.Provider>
  );
};

ImageGalleryProvider.propTypes = {
  children: PropTypes.node,
};

export { ImageGalleryContext, ImageGalleryProvider };
