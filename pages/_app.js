import '../styles/globals.css'
import 'flowbite';
import Header from './component/Header';
import Footer from './component/Footer';
export default function App({ Component, pageProps }) {
   return (
      <div className="container mx-auto bg-gray-300">
         <Header />
         <Component {...pageProps} />
         <Footer />
      </div>)
}
