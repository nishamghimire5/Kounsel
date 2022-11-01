import Link from 'next/link';
import Image from 'next/image';
import FooterPage from './layout/footer';
const Dashboard = () => {
    return (
    <>
    <h1>Welcome to your dashboard!</h1>
    <div class="dashboard-img">
        <Image src = "https://cdn.dribbble.com/users/1247975/screenshots/17462231/media/64934ea29a7e71f715262fbe111fdce8.jpg?compress=1&resize=1200x900&vertical=top" width="350px" height = "350px" layout="fixed" class="dashboard-img-shape" alt="profile picture"/>
    </div>

    <div class="dashboard-text">
        <p>The website will provide counselling services to individuals of Kathmandu University
            who are experiencing difficulties in their lives. The website will offer a range of
            services including booking an appointment, online counselling, and many more. The website
            will also provide information on a range of topics such as mental health, relationships, and
            grief. <Link href="/about"><a>Read More</a></Link>
        </p>
    </div>

    <Link href="/chat"><a><button class="counselor-chat-button">Chat with the counselor</button></a></Link>
    <Link href="/book"><a><button class="appointment-book-button">Book an appointment</button></a></Link>
    
    <div class='footer-position'>
        <FooterPage />
    </div>
    </>
    )
}

export default Dashboard;
