import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ICategory, ICategoryImageList, ICategoryList } from '../../types/categories'
import { getCategoryList, selectedValue } from '../../store/reducers/categoryListReducer'
import { getCategoryImageList, getSelectedCategoryId, toggleShowMenu, selectedValue as mainSelectedValue } from '../../store/reducers/catImageListReducer'
import { AppDispatch } from '../../store/store'
import styles from './sidebar.style'

const Sidebar = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | string | null>(null)
  const dispatch = useDispatch<AppDispatch>()
  const categoryList = useSelector(selectedValue) as ICategoryList
  const mainImagesValue = useSelector(mainSelectedValue) as ICategoryImageList
  const { loaded, loading, result: categories } = categoryList
  const { showMenu } = mainImagesValue

  const { Sidebar, CategoryList, SidebarTitle } = styles

  useEffect(() => {
    (async () => {
      await dispatch(getCategoryList())
      if(loaded) {
        await dispatch(getCategoryImageList({ categoryId: categories[0].id, page: 0 }))
        dispatch(getSelectedCategoryId(categories[0].id))
        setActiveCategoryIndex(categories[0].id)
      }
    })()
  }, [dispatch, loaded])

  const handleCategoryClick = async (categoryId: number | string) => {
    await dispatch(getCategoryImageList({ categoryId, page: 0 }))
    dispatch(getSelectedCategoryId(categoryId))
    dispatch(toggleShowMenu(false))
    setActiveCategoryIndex(categoryId)
  }

  return (
    <Sidebar className={`${showMenu ? 'open' : ''}`}>
      <SidebarTitle>Categories</SidebarTitle>
      {loading && <p>Loading...</p>}
      {loaded &&
        <CategoryList>
          {categories.map((category: ICategory) => (
            <li
              key={category.id}
              className={`${activeCategoryIndex === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </li>
          ))}
        </CategoryList>
      }
    </Sidebar>
  )
}

export default Sidebar
