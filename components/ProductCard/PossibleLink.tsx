import React from 'react';

interface IPossibleLink {
  linkTo?: string;
}

const PossibleLink: React.FC<IPossibleLink> = ({ children, linkTo }) => {
  if (linkTo) {
    return (
      <a href={linkTo} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  } else {
    return <>{children}</>;
  }
};

export default PossibleLink;
