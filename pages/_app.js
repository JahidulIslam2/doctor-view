import '../styles/globals.css'
import Layouts from '../components/layouts/Layouts'
import 'react-day-picker/dist/style.css';
import AuthContextProvider from '../components/firebaseAuth/FirebaseAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layouts>
        <ToastContainer />
        <Component {...pageProps} />
      </Layouts>

    </AuthContextProvider>
  )
}