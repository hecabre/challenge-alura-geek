import Btn from "../Btn";
import { useGetCharacterByNameQuery } from "../../redux/services/marvelApi";
import Loader from "../Loader";
import { Link, redirect } from "react-router-dom";

function CharacterCard({ character }) {
  const {
    data: characterData,
    isFetching,
    isError,
  } = useGetCharacterByNameQuery(character);

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return redirect("/error");
  }

  return (
    <Link to={`/character/${characterData.name}`}>
      <div className="flex items-center flex-col justify-center bg-white rounded-lg p-5 shadow-md">
        <h3 className="text-black">{character}</h3>
        <img
          src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
          alt="character-img"
          className="rounded w-40"
        />
        <Btn
          type="submit"
          redirect
          text="See Comics"
          redirectPath={`/character/${characterData.name}`}
        />
      </div>
    </Link>
  );
}

export default CharacterCard;
