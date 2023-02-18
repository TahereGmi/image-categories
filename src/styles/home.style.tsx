import styled from 'styled-components';

const styles = {  
imageList: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,

  image: styled.img`
    width: 25%;
    margin: 10px;
  `,

  loadMoreButton: styled.button`
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
