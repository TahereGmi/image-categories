import styled from 'styled-components';

const styles = {
  ImageListWrapper: styled.div`
    width: 100%;
    min-height: 100vh;
    padding-left: 220px;
  `,

  ImageList: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  `,

  Image: styled.img`
    width: 25%;
    margin: 10px;
  `,

  LoadMoreButton: styled.button`
    margin-top: 20px;
    padding: 10px;
    background-color: #2192ad;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 50px;

    &:hover {
      opacity: 0.6;
    }
  `,
  Loading: styled.div`
    width: 100%;
    text-align: center;
    margin-top: 20px;
  `,
  ImageWrap: styled.figure`
    flex: 0 0 25%;
    img {
      display: block;
      width: 100%;
    }
  `
};

export default styles;
