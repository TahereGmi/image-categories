import type { AppProps } from 'next/app'
import { store } from '../src/store/store'
import { Provider } from 'react-redux'
import '../src/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>)
}

export default App