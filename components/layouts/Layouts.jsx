import Footer from '../../pages/page/footer/Footer';
import Navbar from '../../pages/page/navbar/Navbar';


const Layouts = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layouts;