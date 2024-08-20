import { useSelector } from "react-redux";
import "./userInfo.css";
import { useEffect, useState } from "react";

const UserInfo = () => {
  const singedUser = useSelector((state) => state.user);
  const [firstLetter, setFirstLetter] = useState("");

  useEffect(() => {
    const time = setTimeout(() => {
      setFirstLetter(singedUser.name.charAt(0).toUpperCase());
    }, 2000);
    return () => clearTimeout(time);
  }, [singedUser]);

  return (
    <div className="userInfo">
      <div className="list-user">
        {singedUser.photoUrl && <img src={singedUser.photoUrl} alt="avatar" />}
        {!singedUser.photoUrl && (
          <div className="avatar-first-litter">{firstLetter}</div>
        )}
        <h2 className="name">{singedUser.name}</h2>
      </div>
      <div className="icons">
        <img src="./video.png" alt="video" />
        <img src="./more.png" alt="more" />
        <img src="./edit.png" alt="edit" />
      </div>
    </div>
  );
};

export default UserInfo;
