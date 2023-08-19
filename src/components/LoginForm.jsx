import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../redux/session/sessionSlice";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionState = useSelector((state) => state.session.isAuthenticated);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [session, setSession] = useState({
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (sessionState) {
      navigate("/");
    }
  }, [sessionState, navigate]);

  const flipForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      session.email === process.env.EMAIL &&
      session.password === process.env.PASSWORD
    ) {
      dispatch(authenticateUser());
    } else {
      setShowAlert(true);
    }
  };

  const handleChange = (e) => {
    setSession({
      ...session,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AnimatePresence>
        <motion.div
          key="login-form"
          className="bg-white p-8 rounded shadow-lg max-w-md w-full"
          initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {showAlert && (
            <Alert type={"error"} closeFunction={() => setShowAlert(false)}>
              <h3>Password or Email incorrect</h3>
            </Alert>
          )}
          <h2 className="text-3xl font-light text-gray-700 mb-6 text-center">
            Login
          </h2>
          <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label htmlFor="email" className="text-gray-800 mb-1 block">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Type your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-800 mb-1 block">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Type your password"
              />
            </div>
            <div>
              <button className="w-full py-3 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded">
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoginForm;
