import Container from './components/features/Container/Container';

import Hero from './components/sections/Hero/Hero';
import Projects from './components/sections/Projects/Projects';


const App = () => {
  return (
    <Container>
      <Hero />
      <Projects />
    </Container>
  );
}

export default App;
