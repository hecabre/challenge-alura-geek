import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SearchBar() {
  const [characterName, setCharacterName] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/character/${characterName}`);
      setCharacterName("");
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        className="rounded-lg px-2 placeholder:text-gray-400 p-1 border border-blue-500 placeholder:font-light focus:font-light font-light "
        placeholder="Search Character"
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => setCharacterName(e.target.value)}
        value={characterName}
      />
      <Link to={`/character/${characterName}`}>
        <AiOutlineSearch className="text-blue-500 cursor-pointer ml-2 text-xl" />
      </Link>
    </div>
  );
}

export default SearchBar;
