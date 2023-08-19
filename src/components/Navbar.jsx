import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/session/sessionSlice";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sessionState = useSelector((state) => state.session.isAuthenticated);
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const dispatch = useDispatch();

  const renderAuthButtons = () => {
    const buttonText = sessionState ? "Logout" : "Login";
    const buttonColor = sessionState
      ? "bg-red-500 hover:bg-red-600"
      : "bg-blue-500 hover:bg-blue-600";
    return (
      <>
        {sessionState ? (
          <>
            <Link
              to="/create-comic/"
              className={`ml-4 px-4 py-2 text-white font-light bg-blue-500 rounded`}
            >
              Create Comic
            </Link>
            <Link
              to="/created-comics"
              className={`ml-4 px-4 py-2 text-white font-light bg-blue-500 rounded`}
            >
              See Comics
            </Link>
            <Link
              to="/"
              onClick={() => dispatch(logoutUser())}
              className={`ml-4 px-4 py-2 text-white font-light ${buttonColor} rounded`}
            >
              {buttonText}
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className={`ml-4 px-4 py-2 text-white font-light ${buttonColor} rounded`}
            >
              {buttonText}
            </Link>
            <Link
              to="/created-comics"
              className={`ml-4 px-4 py-2 text-white font-light bg-blue-500 rounded`}
            >
              See Comics
            </Link>
          </>
        )}
      </>
    );
  };

  return (
    <nav className="shadow-lg fixed w-full bg-gray-200 z-10 py-1">
      <div className="max-w-7xl mx-auto px-4 py-2 sticky">
        <div className="flex justify-between h-16 flex-wrap">
          <div className="flex items-center">
            <Link to={"/"}>
              <h1 className="text-2xl font-light">
                Alura <span className="text-blue-500">Geek</span>
              </h1>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium hidden sm:block">
              <SearchBar />
            </div>
            <div className="hidden sm:block">{renderAuthButtons()}</div>

            <div className="block sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="hover:text-gray-800 px-2 py-1 rounded-md text-sm font-medium focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                      className="text-blue-500"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                      className="text-blue-500"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="flex flex-col gap-3 sm:hidden mt-2 h-auto justify-center items-center">
            <SearchBar />
            {renderAuthButtons()}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
