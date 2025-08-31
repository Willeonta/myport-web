import { Fragment } from "react"
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Experiences from "../components/experiences/Experiences";
import Projects from "../components/projects/Projects";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <Fragment>
        <Header />
        <Hero />
        <About />
        <Services />
        <Experiences />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
    </Fragment>
  )
}
export default Layout