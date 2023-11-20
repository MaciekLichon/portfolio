import Container from './components/features/Container/Container';

import Projects from './components/sections/Projects/Projects';
import Footer from './components/sections/Footer/Footer';
import NewHero from './components/sections/NewHero/NewHero';


const App = () => {
  return (
    <>
      <Container>
        <NewHero />
        <Projects />
      </Container>
      <Footer />
    </>
  );
}

export default App;
