import React from 'react';
import Head from 'next/head';

import PixelOne from './pixelOne';

interface IPixel {
  name: string;
}

const Pixel: React.FC<IPixel> = ({ name }) => {
  return <Head>{name === 'PixelOne' && <PixelOne />}</Head>;
};

export default Pixel;
