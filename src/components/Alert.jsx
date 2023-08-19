import {
  AiFillWarning,
  AiFillCheckCircle,
  AiFillInfoCircle,
} from "react-icons/ai";
import { BiSolidErrorCircle } from "react-icons/bi";

function Alert({ type, children, closeFunction }) {
  const isValidType = ["success", "error", "info", "warning"].includes(type);

  const typeMapping = {
    success: {
      icon: <AiFillCheckCircle />,
      colorClass: "bg-green-500",
    },
    error: {
      icon: <BiSolidErrorCircle />,
      colorClass: "bg-red-500",
    },
    info: {
      icon: <AiFillInfoCircle />,
      colorClass: "bg-blue-500",
    },
    warning: {
      icon: <AiFillWarning />,
      colorClass: "bg-yellow-400",
    },
  };

  const { icon, colorClass } = isValidType
    ? typeMapping[type]
    : typeMapping.success;

  return (
    <div
      className={`${colorClass} px-4 py-3 rounded flex items-center justify-between mb-2`}
      role="alert"
    >
      <div className={`text-white flex items-center justify-center gap-1`}>
        {icon}
        {children}
      </div>
      <button
        onClick={closeFunction}
        className={`text-white cursor-pointer text-2xl`}
      >
        &times;
      </button>
    </div>
  );
}

export default Alert;
