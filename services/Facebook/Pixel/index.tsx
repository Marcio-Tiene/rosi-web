import React from 'react';
import Head from 'next/head';

import PixelScript from './PixelScript';

interface IPixel {
  name: string;
  pixelKey: string;
}

const Pixel: React.FC<IPixel> = ({ name, pixelKey }) => {
  return <Head>{name === 'PixelScript' && <PixelScript pixelKey={pixelKey} />}</Head>;
};

export default Pixel;
