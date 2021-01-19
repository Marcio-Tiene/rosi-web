import React from 'react';
import { CopyrightFooter } from './styles';

const PageMainFooter: React.FC = () => {
  const copyrightDate = new Date();
  const copyrightYear = copyrightDate.getFullYear();

  return (
    <CopyrightFooter>
      <strong>
        © COPYRIGHT {copyrightYear} –{' '}
        <a
          href="https://www.linkedin.com/in/marcio-fornazari-tiene-940070193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marcio Tiene
        </a>
        .
      </strong>
    </CopyrightFooter>
  );
};

export default PageMainFooter;
