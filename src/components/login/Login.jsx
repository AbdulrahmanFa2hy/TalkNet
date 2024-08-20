import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { user } from "../../redux/userSlice";
import { toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const createdUser = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      dispatch(
        user({
          email: emailRef.current.value,
          name: createdUser.user.displayName,
          photoUlr: createdUser.user.photoURL,
        })
      );
      toast.success("Sign in successful.");
      navigate("/");
    } catch {
      toast.error("Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <label htmlFor="email">Welcome back</label>
      <input
        type="email"
        id="email"
        placeholder="Type your email"
        ref={emailRef}
      />
      <input
        type="password"
        placeholder="Type your password"
        ref={passwordRef}
      />
      <button type="submit" disabled={loading}>
        Sign in
      </button>
      <Link to={"/signup"}>Need an Account ?</Link>
    </form>
  );
};

export default Login;
