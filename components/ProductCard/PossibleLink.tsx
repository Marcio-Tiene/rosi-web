import React from 'react';
import { ProductLink } from './styles';

interface IPossibleLink {
  linkTo?: string;
  linkKey: string;
}

const PossibleLink: React.FC<IPossibleLink> = ({ children, linkTo, linkKey }) => {
  if (linkTo) {
    return (
      <ProductLink
        key={linkKey}
        href={linkTo}
        style={{ alignSelf: 'flex-end' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </ProductLink>
    );
  } else {
    return <>{children}</>;
  }
};

export default PossibleLink;
