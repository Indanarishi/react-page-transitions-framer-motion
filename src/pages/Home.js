
// components
import Header from "../components/Header"
import Hero from "../components/Hero"

const Image = 'https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const Title = 'Home'
const Desc = 'Lorem ipsum, dolor sit amet.'

const Home = () => {
    return (
        <>
            <Header />
            <Hero image={Image} title={Title} desc={Desc} />
        </>
    )
}

export default Home
