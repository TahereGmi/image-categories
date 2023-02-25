import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import IndexPage from '../../pages/index'

const mockStore = configureMockStore([thunk])

describe('IndexPage component', () => {
  let store
  beforeEach(() => {
    store = mockStore({
      catImageList: {
        loading: false,
        loaded: true,
        result: [
          {
            id: 1,
            url: 'https://example.com/cat.jpg',
          },
          {
            id: 2,
            url: 'https://example.com/cat2.jpg',
          },
        ],
        selectedCategoryId: 1,
        showMenu: false,
      },
    })
  })

  it('should render the component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <IndexPage />
      </Provider>
    )

    expect(getByText('Load More')).toBeInTheDocument()
  })

  it('should call handleLoadMore when Load More button is clicked', async () => {
    const handleLoadMore = jest.fn()
    const { getByText } = render(
      <Provider store={store}>
        <IndexPage handleLoadMore={handleLoadMore} />
      </Provider>
    )

    fireEvent.click(getByText('Load More'))
    await waitFor(() => expect(handleLoadMore).toHaveBeenCalledTimes(1))
  })

  it('should toggle the menu when MenuIcon is clicked', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <IndexPage />
      </Provider>
    )

    fireEvent.click(getByTestId('menu-icon'))
    const actions = store.getActions()
    expect(actions[0].type).toEqual('catImageList/toggleShowMenu')
    expect(actions[0].payload).toEqual(true)
  })
})
