import About from './About'
import Hero from './Hero'
import ProjectParent from './../components/projects/ProjectParent';
import Contact from './Contact';

function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <ProjectParent/>
        <Contact/>
    </div>
  )
}

export default Home