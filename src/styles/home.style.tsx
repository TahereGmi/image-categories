import styled from 'styled-components';

const styles = {
  ImageListWrapper: styled.div`
    width: 100%;
    min-height: 100vh;
    padding-left: 200px;
    background-color: #222;

    @media (min-width: 320px) and (max-width: 767px) {
      padding-left: 0;
    }
  `,

  ImageList: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    min-height: calc(100vh - 70px);
  `,
  LoadMoreButton: styled.button`
    padding: 10px;
    background-color: #2192ad;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  `,
  Loading: styled.div`
    width: 100%;
    text-align: center;
    margin-top: 20px;
    background-color: #2192ad;
    height: 30px;
    color: #fff;
    line-height: 30px;
    font-size: 14px;
  `,
  LoadMoreBtnWrap: styled.div`
    width: 100%;
    background-color: #f1f1f1;
    padding: 30px 0;
    text-align: center;
  `,
  ImageWrap: styled.figure`
    flex: 0 0 25%;
    border: solid 2px #f1f1f1;
    border-radius: 3px;

    img {
      display: block;
      width: 100%;
    }

    @media (min-width: 768px) and (max-width: 959px) {
      flex: 0 0 35%;
    }

    @media (min-width: 320px) and (max-width: 767px) {
      flex: 0 0 80%;
    }
  `,
  MenuIcon: styled.div`
    width: 30px;
    height: 20px;
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 10;
    background-color: #333;
    padding: 5px;
    border-radius: 3px;

    @media (min-width: 768px) {
      display: none;
    }

    span {
      position: absolute;
      height: 3px;
      top: 8px;
      width: 100%;
      background-color: #f1f1f1;
      transition: ease 600ms;

      &:before,
      &:after {
        content: "";
        width: 100%;
        height: 3px;
        position: absolute;
        background-color: #f1f1f1;
      }

      &:before {
        top: -6px;
      }

      &:after {
        bottom: -6px;
      }
    }

    &.open {
      background-color: #f1f1f1;
      span {
        transform: rotate(45deg);
        background-color: #333;
        &:before,
        &:after {
          background-color: #333;
        }
        &:before {
          display: none;
        }
        &:after {
          transform: rotate(-90deg);
          bottom: 0;
        }
      }
    }
  `
};

export default styles;
