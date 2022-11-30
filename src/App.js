
import './App.css';
import About from './components/About';
import BookFood from './components/BookFood';
import Counter from './components/Counter';
import ExploreFood from './components/ExploreFood';
import Faq from './components/Faq';
import Footer from './components/Footer';

import Header from './components/Header';
import NewsLetter from './components/NewsLetter';
import Story from './components/Story';
import Testimonial from './components/Testimonial';
import TopBanner from './components/TopBanner';
function App() {
  return (
     <>
     <Header/>
     <TopBanner/>
     <Counter/>
     <About/>
     <Story/>
     <ExploreFood/>
     <Testimonial/>
     <Faq/>
     <BookFood/>
     <NewsLetter/>
     <Footer/>
     </>
  );
}

export default App;
