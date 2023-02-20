import { useEffect, useRef } from 'react';
import { ICategoryImage, ICategoryImageList } from '../src/types/categories'
import { useSelector, useDispatch } from 'react-redux'
import { getCategoryImageList, toggleShowMenu, selectedValue } from '../src/store/reducers/catImageListReducer'
import Sidebar from '../src/components/sidebar';
import { AppDispatch } from '../src/store/store'
import styles from '../src/styles/home.style';

const IndexPage = () => {
  const page = useRef<number>(0)
  const dispatch = useDispatch<AppDispatch>()
  const categoryImageList = useSelector(selectedValue) as ICategoryImageList
  const { loaded, loading, result: categoryImages, selectedCategoryId, showMenu } = categoryImageList

  const { 
    ImageList, 
    ImageListWrapper, 
    ImageWrap, 
    Loading, 
    LoadMoreButton, 
    LoadMoreBtnWrap, 
    MenuIcon 
  } = styles

  const handleLoadMore = async () => {
    page.current += 1
    await dispatch(getCategoryImageList({ categoryId: selectedCategoryId, page: page.current}))
  };

  useEffect(() => {
    page.current = 0
  }, [selectedCategoryId])

  const toggleMenu = () => {
    dispatch(toggleShowMenu(!showMenu))
  }

  return (
    <>
      <Sidebar />
      <ImageListWrapper>
        <MenuIcon
          className={`${showMenu ? 'open' : 'close'}`}
          onClick={() => toggleMenu()}
        >
          <span />
        </MenuIcon>
        {loading && <Loading>Loading...</Loading>}
        {loaded && categoryImages.length > 0 && 
          <>
            <ImageList>
              {categoryImages.map((image: ICategoryImage) => (
                <ImageWrap>
                  <img key={image.id} src={image.url} alt="cat" />
                </ImageWrap>
              ))}
            </ImageList>
            <LoadMoreBtnWrap>
              <LoadMoreButton 
                onClick={() => handleLoadMore()}
                disabled={loading}
              >Load More</LoadMoreButton>
            </LoadMoreBtnWrap>
          </>
        }
        {loaded && categoryImages.length == 0 && <p>No result found!</p>}
      </ImageListWrapper>
    </>
  );
};

export default IndexPage;

// TO DO:
// Lazy loading
// test 
// design
