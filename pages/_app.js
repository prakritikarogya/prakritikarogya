import '../styles/globals.css'
import 'flowbite';
import Header from './component/Header';
import Footer from './component/Footer';
import Head from "next/head";
export default function App({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>Pratkritik Arogyaashram: Nature Cure institute & Empowering Holistic Health Solutions</title>
            <meta name="description" content="Discover Pratkritik Arogyaashram's compassionate approach to healthcare, integrating Naturopathy, Ayurveda, Yoga, and more for personalized well-being. Our expert team is dedicated to empowering individuals on their health journey, fostering vitality and resilience through holistic solutions. Join us in shaping a transformative healthcare experience for a healthier future." />
            <meta name="keywords" content="Pratkritik Arogyaashram, compassionate healthcare, Naturopathy, Ayurveda, Yoga, personalized well-being, holistic solutions, vitality, resilience, transformative healthcare" />
            <link rel="canonical" href={'https://prakritikarogya.in/'} />
         </Head>
         <div className="container mx-auto bg-gray-300">
            <Header />
            <Component {...pageProps} />
            <Footer />
         </div>
      </>)
}
