import styled from 'styled-components';

export const SocialMediaArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .social-media-title {
    font-size: 1rem;
  }

  .social-media-card {
    display: flex;
    justify-content: center;
    width: 170px;
    height: 50px;
    font-size: 1rem;

    gap: 10px;
    align-items: center;
    cursor: pointer;
  }
`;
