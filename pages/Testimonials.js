import ActiveCoursel from "./ActiveCourosel";
import Info from '/pages/assets/data/TestimonialInfo.json';

const Testimonials = () => {
    return (
        <div className="container my-5 container1">
            <hr className="my-5" />
            <p className="mb-5">Testimonials</p>
            {/* <!--Carousel Wrapper--> */}
            <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    {/* <!--First slide--> */}
                    <div className=""  >
                        <div className="row text-dark">
                            {Info.map((test, index) => {
                                return (<ActiveCoursel key={index} imgLink={test.imgLink} nameInCourosel={test.name} sayInCourosel={test.say} />)
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials;