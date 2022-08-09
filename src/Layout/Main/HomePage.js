import Cards from '../../Cards/Cards'
import BgImage from '../../bgImageHomePage/BgImage.js'
import Testimonials from '../../Testimonials/Testimonials.js';

const HomePage = () => {
    return (
        <>
            {/* background image in Homepage */}
            <BgImage />
            {/* cards of what we can help with section*/}
            <Cards />
            {/* Testimonials section*/}
            <Testimonials />
        </>
    );
}
export default HomePage;