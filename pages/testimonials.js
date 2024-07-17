import ActiveCoursel from "./ActiveCourosel";
import Info from '/pages/assets/data/TestimonialInfo.json';

const Testimonials = () => {
    return (
        <div className="container my-5">
            <hr className="my-5" />
            <h3 className="title">Testimonials</h3><br />
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