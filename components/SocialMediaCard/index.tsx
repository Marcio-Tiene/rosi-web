import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import Button from '../Button';
import { SocialMediaArticle } from './styles';

interface ISocialMediaCard {
  title: string;
  mediaIcon: JSX.Element;
  mediaName: string;
  mediaLink?: string;
  bgColor: string;
  interactionColor: string;
}

const SocialMediaCard: React.FC<ISocialMediaCard> = ({
  title,
  mediaIcon,
  mediaName,
  mediaLink,
  bgColor,
  interactionColor,
}) => {
  return (
    <SocialMediaArticle>
      <h1 className="social-media-title">{title}</h1>
      <FaArrowDown size={30} />
      <a href={mediaLink} target="_blank" rel="noopener noreferrer">
        <Button bgColor={bgColor} interactionColor={interactionColor} className="social-media-card">
          {mediaIcon}
          {mediaName}
        </Button>
      </a>
    </SocialMediaArticle>
  );
};

export default SocialMediaCard;
