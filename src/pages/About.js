
// components
import Header from "../components/Header"
import Hero from "../components/Hero"

const Image = 'https://images.pexels.com/photos/117139/pexels-photo-117139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const Title = 'About'
const Desc = 'Lorem ipsum, dolor sit amet.'

const About = () => {
    return (
        <>
            <Header />
            <Hero image={Image} title={Title} desc={Desc}/>
        </>
    )
}

export default About
