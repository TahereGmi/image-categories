import { ICategoryImage, ICategoryImageList } from '../src/types/categories'
import { useSelector, useDispatch } from 'react-redux'
import { getCategoryImageList, selectedValue } from '../src/store/reducers/catImageListReducer'
import Sidebar from '../src/components/sidebar';
import { AppDispatch } from '../src/store/store'

const IndexPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const categoryImageList = useSelector(selectedValue) as ICategoryImageList
  const { loaded, loading, result: categoryImages } = categoryImageList

  const handleLoadMore = async () => {
    const lastCategoryId = categoryImages[categoryImages.length - 1].id;
    await dispatch(getCategoryImageList(lastCategoryId))
  };

  return (
    <div>
      <Sidebar />
      <div>
        <h2>Select a category to show the images: </h2>
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
      </div>
    </div>
  );
};

export default IndexPage;

// TO DO:
// load more issue
// test 
// design
