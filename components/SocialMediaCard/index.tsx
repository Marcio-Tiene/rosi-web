import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

interface ISocialMediaCard {
  title: string;
  mediaIcon: JSX.Element;
  mediaName: string;
  mediaLink: string;
}

const SocialMediaCard: React.FC<ISocialMediaCard> = ({
  title,
  mediaIcon,
  mediaName,
  mediaLink,
}) => {
  return (
    <article>
      <h1>{title}</h1>
      <FaArrowDown />
      <a href={mediaLink}>
        <button>
          {mediaIcon}
          {mediaName}
        </button>
      </a>
    </article>
  );
};

export default SocialMediaCard;
