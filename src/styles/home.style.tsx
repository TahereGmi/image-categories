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
  `,

  Image: styled.img`
    width: 25%;
    margin: 10px;
  `,

  LoadMoreButton: styled.button`
    margin-top: 20px;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #3e8e41;
    }
  `
};

export default styles;
