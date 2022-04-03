import Footer from "../components/Footer";
import Header from "../components/Header";
import Highlights from "../components/Highlights";
import Nav from "../components/Nav";
import Study from "../components/Study";
import Summary from "../components/Summary";

const Home = () => {
    return (
        <>
            <Nav/>
            <Header/>
            <Summary/>
            <Study/>
            <Highlights/>
            <Footer/>
        </>
    )
}

export default Home;
