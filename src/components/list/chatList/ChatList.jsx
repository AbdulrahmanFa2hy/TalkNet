import { useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chat-list">
      <div className="search-user">
        <label htmlFor="search" className="search">
          <img src="./search.png" alt="" />
          <input type="text" name="search" id="search" placeholder="search" />
        </label>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="plus"
          className="plus"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="items">
        <div className="item">
          <img src="./avatar.jpeg" alt="item-avatar" className="item-avatar" />
          <div className="texts">
            <h3 className="name">Sandra Clark</h3>
            <div className="message">text from new message</div>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.jpeg" alt="item-avatar" className="item-avatar" />
          <div className="texts">
            <h3 className="name">Sandra Clark</h3>
            <div className="message">text from new message</div>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.jpeg" alt="item-avatar" className="item-avatar" />
          <div className="texts">
            <h3 className="name">Sandra Clark</h3>
            <div className="message">text from new message</div>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.jpeg" alt="item-avatar" className="item-avatar" />
          <div className="texts">
            <h3 className="name">Sandra Clark</h3>
            <div className="message">text from new message</div>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.jpeg" alt="item-avatar" className="item-avatar" />
          <div className="texts">
            <h3 className="name">Sandra Clark</h3>
            <div className="message">text from new message</div>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.jpeg" alt="item-avatar" className="item-avatar" />
          <div className="texts">
            <h3 className="name">Sandra Clark</h3>
            <div className="message">text from new message</div>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.jpeg" alt="item-avatar" className="item-avatar" />
          <div className="texts">
            <h3 className="name">Sandra Clark</h3>
            <div className="message">text from new message</div>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.jpeg" alt="item-avatar" className="item-avatar" />
          <div className="texts">
            <h3 className="name">Sandra Clark</h3>
            <div className="message">text from new message</div>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.jpeg" alt="item-avatar" className="item-avatar" />
          <div className="texts">
            <h3 className="name">Sandra Clark</h3>
            <div className="message">text from new message</div>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.jpeg" alt="item-avatar" className="item-avatar" />
          <div className="texts">
            <h3 className="name">Sandra Clark</h3>
            <div className="message">text from new message</div>
          </div>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
