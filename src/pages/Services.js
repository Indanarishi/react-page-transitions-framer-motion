
// components
import Header from "../components/Header"
import Hero from "../components/Hero"

const Image = 'https://images.pexels.com/photos/2400030/pexels-photo-2400030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const Title = 'Services'
const Desc = 'Lorem ipsum, dolor sit amet.'

const Services = () => {
    return (
        <>
            <Header />
            <Hero image={Image} title={Title} desc={Desc}/>
        </>
    )
}

export default Services
