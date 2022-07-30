import image from './Images/bgimage1.jpg';
import './HomePage.css'

const HomePage = () => {
    let slogan = "A Safe Space"
    return (
        <>
            <div className="box ">
                <img className="img-responsive img-fluid bgHImg" src={image} alt="bg-pic" />
                <div class="img-title">
                    <div className="dropdown font-sans tracking-wider">
                        <h2>Kounsel</h2>
                        <p>{slogan}</p>
                        <button className="btn getStartedBtn btn-outline-dark " type="button" >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
// { <div class="box ">
//     <div class="img-title">
//         <img class="img-responsive img-fluid " src="Images/background1.jpg" alt="header image">
//             <p class="display-4 text-2xl text-red-500 leading-relaxed font-serif"> Hello. World.</p>
//             <p class="display-4 text-5xl leading-normal">I'm Nisham Ghimire</p>
//             <p class="display-4 text-xl font-serif mt-2">| Front End Developer | Software Engineer |</p>


//             <!-- dropdown menu -->
//             <div class="dropdown mt-4 font-sans tracking-wider">
//                 <button class="btn btn-secondary dropdown-toggle btn bg-transparent" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
//                     MoreAboutMe
//                 </button>
//                 <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
//                     <li><a class="dropdown-item active" href="https://www.facebook.com/nishamghimire5/"> <i class="social-icon fab fa-facebook-square" aria-hidden="true"></i> &nbsp;Facebook</a>
//                     </li>
//                     <li><a class="dropdown-item" href="https://github.com/nishamghimire5/"><i class="fab fa-github" aria-hidden="true"></i>&nbsp; Github</a></li>
//                     <li><a class="dropdown-item" href="https://www.instagram.com/nishamghimire/"> <i class="social-icon fab fa-instagram" aria-hidden="true"></i>
//                         &nbsp;Instagram</a></li>
//                     <li>
//                         <hr class="dropdown-divider">
//                     </li>
//                     <li><a class="dropdown-item" href="contact-me.html">Message Me 😉</a></li>
//                 </ul>
//             </div>
//     </div>
// </div> }
export default HomePage;