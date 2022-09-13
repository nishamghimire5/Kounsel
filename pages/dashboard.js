import Link from 'next/link';
const Dashboard = () => {
    return (<>
    <h2 className="welcome">Welcome User</h2>
    <div className="descrip" >
        <div className="row" style={{margin: "20px"} }>
            The website will provide counselling services to individuals of Kathmandu University who are experiencing difficulties in their lives. The website will offer a range of services including booking an appintment, online counselling, and many more. 
            The website will also provide information on a range of topics such as mental health, relationships, and grief. <Link href="/about">
            <a href="/about" className="button1">Read More</a>
            </Link>           
        </div>
        <button type="button" className="btn-book">Book an Appointment</button>
      <br></br>
      <br></br>
      <button type="button" className="btn-chat">Chat with the counsellor</button>
    </div>
    </>)
}

export default Dashboard;