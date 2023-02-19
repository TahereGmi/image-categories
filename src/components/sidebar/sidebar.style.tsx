import styled from 'styled-components';

const styles = {
  Sidebar: styled.div`
    width: 200px;
    height: 100vh;
    background-color: #f1f1f1;
    padding: 20px;
    position: fixed;
  `,

  CategoryList: styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 28px;
    font-size: 14px;

    li {
      text-transform: capitalize;
      cursor: pointer;
      &.active {
        font-weight: bold;
        color: #2192ad;
      }
    }
  `,

  CategoryItem: styled.li`
    cursor: pointer;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    &:hover {
      background-color: #ddd;
    }
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
