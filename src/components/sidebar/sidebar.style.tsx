import styled from 'styled-components';

const styles = {
  sidebar: styled.div`
    width: 20%;
    height: 100%;
    background-color: #f1f1f1;
    padding: 20px;
  `,

  categoryList: styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  categoryItem: styled.li`
    cursor: pointer;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    &:hover {
      background-color: #ddd;
    }
  `,

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
