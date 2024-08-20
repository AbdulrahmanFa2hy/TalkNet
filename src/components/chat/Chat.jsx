import { useEffect, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { useRef } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef();
  const endRef = useRef();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmojiPicker = (e) => {
    inputRef.current.value += e.emoji;
    setOpen(false);
    console.log(inputRef.current.value);
  };

  const handleSendMessage = () => {
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="user">
        <div className="user-info">
          <img src="./avatar.jpeg" alt="avatar" />
          <div className="texts">
            <h3 className="name">Abdulrahman Fathy</h3>
            <div className="bio">Every day is a new beginning.</div>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="phone" />
          <img src="./video.png" alt="video" />
          <img src="./info.png" alt="info" />
        </div>
      </div>
      <div className="messages">
        <div className="message">
          <img src="./avatar.jpeg" alt="avatar" className="avatar" />
          <div className="message-texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam a
              aspernatur velit accusantium facere officia.
            </p>
            <small>1 min ago</small>
          </div>
        </div>
        <div className="message own">
          <div className="message-texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam a
              aspernatur velit accusantium facere officia.
            </p>
            <small>1 min ago</small>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.jpeg" alt="avatar" className="avatar" />
          <div className="message-texts">
            <img
              src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
              alt="img"
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam a
              aspernatur velit accusantium facere officia.
            </p>
            <small>1 min ago</small>
          </div>
        </div>
        <div className="message own">
          <div className="message-texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam a
              aspernatur velit accusantium facere officia.
            </p>
            <small>1 min ago</small>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.jpeg" alt="avatar" className="avatar" />
          <div className="message-texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam a
              aspernatur velit accusantium facere officia.
            </p>
            <small>1 min ago</small>
          </div>
        </div>
        <div className="message own">
          <div className="message-texts">
            <img
              src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
              alt="img"
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam a
              aspernatur velit accusantium facere officia.
            </p>
            <small>1 min ago</small>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.jpeg" alt="avatar" className="avatar" />
          <div className="message-texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam a
              aspernatur velit accusantium facere officia.
            </p>
            <small>1 min ago</small>
          </div>
        </div>
        <div className="endRef" ref={endRef}></div>
      </div>
      <div className="footer">
        <img src="./img.png" alt="img" />
        <img src="camera.png" alt="camera" />
        <img src="mic.png" alt="phone" />
        <input type="text" placeholder="Type a message" ref={inputRef} />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt="emoji"
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker
              theme="dark"
              open={open}
              onEmojiClick={handleEmojiPicker}
            />
          </div>
        </div>
        <button className="send-btn" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
