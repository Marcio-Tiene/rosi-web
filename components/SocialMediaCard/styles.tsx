import styled from 'styled-components';

export const SocialMediaArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  .social-media-title {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .social-media-card {
    display: flex;
    justify-content: center;
    width: 170px;
    height: 50px;
    font-size: 1rem;

    align-items: center;
    cursor: pointer;
    margin-top: 10px;
  }
`;
