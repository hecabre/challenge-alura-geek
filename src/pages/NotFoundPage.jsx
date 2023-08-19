import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-44 text-blue-500 mx-auto mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12" y2="16" />
      </motion.svg>

      <motion.h1
        className="text-4xl font-light mt-8 text-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Oops! Page not found.
      </motion.h1>

      <motion.button
        className="px-4 py-2 mt-8 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{}}
      >
        <Link to={"/"}>Go back to Home</Link>
      </motion.button>
    </div>
  );
};

export default NotFoundPage;
