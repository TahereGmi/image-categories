import { useEffect, useRef } from 'react';
import { ICategoryImage, ICategoryImageList } from '../src/types/categories'
import { useSelector, useDispatch } from 'react-redux'
import { getCategoryImageList, selectedValue } from '../src/store/reducers/catImageListReducer'
import Sidebar from '../src/components/sidebar';
import { AppDispatch } from '../src/store/store'
import styles from '../src/styles/home.style';

const IndexPage = () => {
  const page = useRef<number>(0)
  const dispatch = useDispatch<AppDispatch>()
  const categoryImageList = useSelector(selectedValue) as ICategoryImageList
  const { loaded, loading, result: categoryImages, selectedCategoryId } = categoryImageList

  const { ImageList, ImageListWrapper } = styles

  const handleLoadMore = async () => {
    page.current += 1
    await dispatch(getCategoryImageList({ categoryId: selectedCategoryId, page: page.current}))
  };

  useEffect(() => {
    page.current = 0
  }, [selectedCategoryId])

  return (
    <>
      <Sidebar />
      <ImageListWrapper>
        <ImageList>
          <h2>Select a category to show the images </h2>
          {loading && <p>Loading...</p>}
          {loaded && categoryImages.length > 0 && 
            <>
              {categoryImages.map((image: ICategoryImage) => (
              <img key={image.id} src={image.url} alt="cat" />
              ))}
              <button onClick={() => handleLoadMore()}>Load More</button>
            </>
          }
          {loaded && categoryImages.length == 0 && <p>No result found!</p>}
        </ImageList>
      </ImageListWrapper>
    </>
  );
};

export default IndexPage;

// TO DO:
// Lazy loading
// test 
// design
