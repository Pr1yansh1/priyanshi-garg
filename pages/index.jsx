import About from '../components/about/About';
import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';
import Projects from '../components/projects/Projects';
import Work from '../components/work/Work'; 
import Teaching from '../components/teaching/Teaching'; 
import Head from 'next/head';
import Modal from '../components/ui/Modal';

export default function Index() {
  return (
    <>
      <Head>
        <title>Priyanshi Garg&apos;s Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Priyanshi's personal portfolio website."
        />
      </Head>
      <Modal />
      <Home />
      <About />
      <Work />
      <Teaching/>
      <Projects />
      <Footer />
    </>
  );
}
