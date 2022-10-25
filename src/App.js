import Container from './components/features/Container/Container';

import Hero from './components/sections/Hero/Hero';
import Projects from './components/sections/Projects/Projects';
import Footer from './components/sections/Footer/Footer';


const App = () => {
  return (
    <>
      <Container>
        <Hero />
        <Projects />
      </Container>
      <Footer />
    </>
  );
}

export default App;
