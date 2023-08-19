import { useParams, useNavigate, Link } from "react-router-dom";
import { useGetCharacterByNameQuery } from "../../redux/services/marvelApi";
import extracNumbers from "../../utils/extracNumbers.js";
import Loader from "../Loader";
import ComicFetcher from "./ComicFetcher";
import SerieCard from "./SerieCard";

function generateComicElements(characterData) {
  return characterData?.comics.items.map((e) => {
    const urlId = extracNumbers(e.resourceURI);
    return (
      <div
        key={urlId}
        className="transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl flex"
      >
        <Link to={`/comic/${urlId}`}>
          <ComicFetcher urlId={urlId} />
        </Link>
      </div>
    );
  });
}

function generateSeriesElements(characterData) {
  return characterData?.series.items.map((e) => {
    const urlId = extracNumbers(e.resourceURI);
    return (
      <div
        key={urlId}
        className="transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl bg-gray-100 w-2/3 flex items-center justify-center rounded"
      >
        <Link to={`/series/${urlId}`}>
          <SerieCard serieId={urlId} />
        </Link>
      </div>
    );
  });
}

function CharacterDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const {
    data: characterData,
    isFetching,
    isError,
  } = useGetCharacterByNameQuery(name);

  if (isFetching) return <Loader />;

  if (isError) return navigate("/error");

  return (
    <div className="relative top-24">
      <div className="grid grid-cols-2 items-center justify-items-center m-auto w-11/12 shadow-lg rounded">
        <img
          src={`${characterData?.thumbnail.path}.${characterData?.thumbnail.extension}`}
          alt={name}
          className="rounded h-5/6"
        />
        <div>
          <h3 className="font-bold text-3xl text-center text-gray-800">
            {name}
          </h3>
          <p className="text-center text-gray-800">
            {characterData?.description
              ? characterData?.description
              : "Description of the character not found"}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mb-5">
        <h3 className="text-center text-3xl font-bold text-white bg-blue-500 py-2 px-4 inline-block rounded-lg shadow-lg mt-5">
          {name} Comics:
        </h3>
      </div>
      <div
        key={name}
        className="flex flex-wrap m-auto justify-center items-center gap-5"
      >
        {generateComicElements(characterData)}
      </div>

      <div className="flex items-center justify-center my-10 mx-auto gap-5">
        <h3 className="text-center text-3xl font-bold text-white bg-blue-500 py-2 px-4 inline-block rounded-lg shadow-lg">
          {name} Series:
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 place-items-center">
        {generateSeriesElements(characterData)}
      </div>
    </div>
  );
}

export default CharacterDetails;
