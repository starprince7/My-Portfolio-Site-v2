import PortfolioCustomColumn from "../../components/Portfolio-custom-column";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import DarkTheme from "../../layouts/Dark";
import Footer from "../../components/Footer";

const Portfolio = () => {
    return (
        <DarkTheme>
            <NavbarFullMenu />
            <PortfolioCustomColumn column={2} filterPosition="left" />
            <Footer />
        </DarkTheme>
    );
};

export default Portfolio;