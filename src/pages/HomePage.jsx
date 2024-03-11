import AboutMe from "../components/AboutMe"
import Hero from "../components/Hero"
import Tiles from "../components/Tiles"

const Home = () => {

  return (
    <div className="m-5 md:m-0 lg:m-0">
      <Hero />
      <AboutMe />
      <Tiles />
    </div>

  )
}

export default Home
