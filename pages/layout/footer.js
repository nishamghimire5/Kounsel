
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'


const FooterPage = () => {
    let aboutKounsel = `Kounsel is a project by 3rd sem CS students to initiate a platform 
        for students to share their feelings and discuss their mental problems without the fear 
        of being judged.`;
    return (
        <div className="body">
            {/* <!-- Footer --> */}
            <div className="footer-position">
                <footer className="text-center text-lg-start bg-light text-muted">
                    {/* <!-- Section: Social media --> */}
                    <section
                        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                    >
                        {/* <!-- Left --> */}
                        <div className="me-5 d-none d-lg-block">
                            <p className="mx-3">Get connected with us on social networks:</p>

                        </div>
                        {/* <!-- Left --> */}

                        {/* <!-- Right --> */}

                        <div>  <AiFillFacebook />
                            <AiFillInstagram />
                            <AiFillTwitterCircle />
                        </div>
                        {/* <!-- Right --> */}
                    </section>
                    {/* <!-- Section: Social media --> */}

                    {/* <!-- Section: Links  --> */}
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            {/* <!-- Grid row --> */}
                            <div className="row mt-3">
                                {/* <!-- Grid column --> */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* <!-- Content --> */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3"></i>Kounsel</h6>
                                    <p>{aboutKounsel}</p>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* <!-- Links --> */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Pages
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">About</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Articles</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Sign In</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Sign Up</a>
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* <!-- Links --> */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Contact Developers
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Nisham</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Prekshya</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Sashank</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Aayush</a>
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* <!-- Links -- */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Contact
                                    </h6>
                                    <p><i className="fas fa-home me-3"></i> 28 Kilo, Dhulikhel, Kavre</p>
                                    <p>
                                        <i className="fas fa-envelope me-3"></i> kounsel@ku.edu.com</p>
                                    <p><i className="fas fa-phone me-3"></i> +977 9808707877 </p>
                                    <p><i className="fas fa-print me-3"></i> + 01 9841352235</p>
                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                            {/* <!-- Grid row --> */}
                        </div>
                    </section>
                    {/* <!-- Section: Links  --> */}

                    {/* <!-- Copyright --> */}
                    <div className="text-center p-4">
                        © 2022 Copyright: &nbsp;
                        <a className="text-reset fw-bold" href="https://kounnsel.ku.edu.np/">Kounsel</a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
                {/* <!-- Footer --> */}
            </div>
        </div>
    );
};

export default FooterPage;
