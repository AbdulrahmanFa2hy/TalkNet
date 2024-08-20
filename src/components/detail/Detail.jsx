import { useDispatch, useSelector } from "react-redux";
import "./detail.css";
import { logout, user } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { Bounce, toast } from "react-toastify";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const singedUser = useSelector((state) => state.user);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      toast.info("Logged out successfully.");
      navigate("/login");
    } catch {
      toast.error("Logout failed. Please try again.");
    }
  };
  const handleBlockBtn = () => {};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (cuurentUser) => {
      if (cuurentUser) {
        dispatch(
          user({
            email: cuurentUser.email,
            name: cuurentUser.displayName,
            photoUrl: cuurentUser.photoURL,
          })
        );
        console.log(cuurentUser);
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [dispatch, singedUser, navigate]);

  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.jpeg" alt="avatar" />
        <h3 className="name">Abdulrahman Fathy</h3>
        <small className="bio">Every day is a new beginning.</small>
      </div>
      <div className="settings">
        <div className="row">
          <div className="title">
            <p>Chat settings</p>
            <img src="./arrowUp.png" alt="arrowUp" className="settings-img" />
          </div>
        </div>
        <div className="row">
          <div className="title">
            <p>Privacy & help</p>
            <img src="./arrowUp.png" alt="arrowUp" className="settings-img" />
          </div>
        </div>
        <div className="row">
          <div className="title">
            <p>Shared photos</p>
            <img src="./arrowDown.png" alt="arrowUp" className="settings-img" />
          </div>
          <div className="photos">
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                alt=""
                className="photo"
              />
              <img src="./download.png" alt="download" className="download" />
            </div>
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                alt=""
                className="photo"
              />
              <img src="./download.png" alt="download" className="download" />
            </div>
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                alt=""
                className="photo"
              />
              <img src="./download.png" alt="download" className="download" />
            </div>
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                alt=""
                className="photo"
              />
              <img src="./download.png" alt="download" className="download" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="title">
            <p>Chat settings</p>
            <img src="./arrowUp.png" alt="arrowUp" className="settings-img" />
          </div>
        </div>
      </div>
      <div className="btn">
        <button className="block" onClick={handleBlockBtn}>
          Block user
        </button>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
