import Head from "next/head";
import About from "./component/About";
import Service from "./component/Service";
import Main from "./component/Main";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>prakritikarogyaashram</title>
      </Head>
      <div className="container mx-auto bg-gray-300">
        <Header />
        <Main />
        <About />
        <Service />
        <Footer />
      </div>
    </>
  );
}
