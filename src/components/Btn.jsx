import { Link } from "react-router-dom";

function Btn({ type, text, redirect, redirectPath, children }) {
  const submitStyles =
    "mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300 font-light";
  const buttonStyles = type === "danger" ? dangerStyles : submitStyles;
  const buttonContent = (
    <div className={buttonStyles}>
      <span>{text}</span>
    </div>
  );

  if (redirect) {
    return <Link to={redirectPath}>{buttonContent}</Link>;
  } else {
    return buttonContent;
  }
}

export default Btn;
