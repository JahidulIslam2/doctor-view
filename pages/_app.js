import '../styles/globals.css'
import Layouts from '../components/layouts/Layouts'
import 'react-day-picker/dist/style.css';
export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}
