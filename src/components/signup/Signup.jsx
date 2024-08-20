import { Link } from "react-router-dom";
import "./signup.css";
import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { user } from "../../redux/userSlice";
import { toast } from "react-toastify";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const matchPasswordRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== matchPasswordRef.current.value) {
      return toast.error("Passwords do not match. Please try again.");
    }
    try {
      setLoading(true);
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      updateProfile(createdUser.user, { displayName: nameRef.current.value });
      dispatch(
        user({ email: emailRef.current.value, name: nameRef.current.value })
      );
      toast.success("Account created successfully.");
      navigate("/");
    } catch {
      toast.error("Account creation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const singupWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
      toast.success("Signed up successfully");
    } catch {
      toast.error("Failed to Sign up with google");
    }
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Create an Account</label>
        <input
          required
          type="text"
          id="name"
          placeholder="Type your name"
          ref={nameRef}
        />
        <input
          required
          type="email"
          id="email"
          placeholder="Email"
          ref={emailRef}
        />
        <input
          required
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <input
          required
          type="password"
          placeholder="Confirm password"
          ref={matchPasswordRef}
        />
        <button type="submit" disabled={loading}>
          Create ccount
        </button>
      </form>
      <button onClick={singupWithGoogle} className="google-btn">
        <img src="./google.png" alt="google icons" /> Sign with Google
      </button>
      <Link to={"/login"}>Already have an account ?</Link>
    </div>
  );
};

export default Signup;
