import { format } from "timeago.js";

export default function Message({ message, own }) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                {/* <p className="messageText">{message.text}</p> */}
                <p className="messageText">Hello this is Nisham!</p>
            </div>
            {/* <div className="messageBottom">{format(message.createdAt)}</div> */}
            <div className="messageBottom">9:00 pm</div>
        </div>
    );
}