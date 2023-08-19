import { useParams } from "react-router-dom";
import extracNumbers from "../utils/extracNumbers.js";
import Loader from "../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import ComicFetcher from "../components/MarvelComics/ComicFetcher.jsx";
import { useGetSerieQuery } from "../redux/services/marvelApi";

function SerieDetailsPage() {
  2;
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: serieData, isError, isFetching } = useGetSerieQuery(id);
  const generateUrlId = (resourceURI) => extracNumbers(resourceURI);

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    navigate("/error");
  }

  return (
    <div className="relative top-16">
      <div className="grid grid-cols-2 items-center justify-items-center m-auto w-11/12 shadow-lg rounded">
        <img
          src={`${serieData.data.results[0].thumbnail.path}.${serieData.data.results[0].thumbnail.extension}`}
          alt={serieData.data.results[0].title}
          className="rounded h-5/6"
        />
        <div>
          <h3 className="font-bold lg:text-2xl text-center sm:text-base md:text-2xl">
            {serieData?.data.results[0].title}
          </h3>
          <p className="lg:text-2xl text-center sm:text-base md:text-2xl">
            {serieData?.data.results[0].description
              ? serieData.data.results[0].description
              : "Description of the character not found"}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center my-10 mx-auto gap-5">
        <h3 className="text-center text-3xl font-bold text-white bg-blue-500 py-2 px-4 inline-block rounded-lg shadow-lg">
          {serieData?.data.results[0].title} Comics:
        </h3>
      </div>
      <div className="flex flex-wrap m-auto justify-center items-center gap-5">
        {!serieData.data.results[0].comics.items && <Loader />}
        {serieData?.data.results[0].comics.items.map((e) => (
          <div
            className="transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl flex"
            key={generateUrlId(e.resourceURI)}
          >
            <Link to={`/comic/${generateUrlId(e.resourceURI)}`}>
              <ComicFetcher urlId={generateUrlId(e.resourceURI)} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SerieDetailsPage;
