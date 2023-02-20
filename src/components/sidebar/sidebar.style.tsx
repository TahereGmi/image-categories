import styled from 'styled-components';

const styles = {
  Sidebar: styled.div`
    width: 200px;
    height: 100vh;
    background-color: #f1f1f1;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform ease 500ms;

    @media (min-width: 320px) and (max-width: 767px) {
      width: 100%;
      left: 0;
      transform: translateY(-300px);
      height: 300px;
    }

    &.open {
      @media (min-width: 320px) and (max-width: 767px) {
        transform: translateY(0px);
      }
    }
  `,
  SidebarTitle: styled.h1`
    color: #333;
    font-size: 18px;
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
      border-bottom: 1px solid #ddd;
      &.active {
        font-weight: bold;
        color: #2192ad;
      }
    }
  `,

  ImageList: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,

  Image: styled.img`
    width: 25%;
    margin: 10px;
  `
};

export default styles;
