import { useParams } from "react-router-dom";
import ComicImage from "./ComicImage";
import { useGetCharacterByIDQuery } from "../../redux/services/marvelApi";
import CharacterCard from "./CharacterCard";
import Loader from "../Loader";
import { redirect } from "react-router-dom";

function ComicDetails() {
  const { id } = useParams();
  const { data: comic, isError, isFetching } = useGetCharacterByIDQuery(id);

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return redirect("/error");
  }

  return (
    <div className="relative top-24 ">
      <section
        key={comic.id}
        className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center justify-items-center w-11/12 shadow-lg rounded p-2 mx-auto "
      >
        <div className="flex flex-col w-1/2">
          {comic.images[0] < 1 ? (
            <ComicImage
              comicTitle={comic.title}
              urlImg={comic.images[0].path}
              imgExtension={comic.images[0].extension}
              fallbackImage={false}
            />
          ) : (
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="rounded h-5/6"
            />
          )}
        </div>
        <div className="flex flex-col items-center justify-center ">
          <h2 className="font-bold text-2xl text-center text-gray-800">
            {comic.title}
          </h2>
          <p className="capitalize font-light text-xl text-center">
            {comic.creators.items[0] ? (
              <p>
                {comic?.creators.items[0].role}: {comic?.creators.items[0].name}
              </p>
            ) : (
              <p className="capitalize font-light text-xl text-center">
                Unavailable writers
              </p>
            )}
          </p>
          {comic.description === "" ||
          comic.description === null ||
          comic.description === undefined ? (
            <p className="text-center lg:text-base sm:text-xs font-light">
              {" "}
              Description not Found
            </p>
          ) : (
            <p className="text-center lg:text-base sm:text-xs font-light">
              {comic.description}
            </p>
          )}

          <p className="text-center bg-blue-500 rounded w-30 p-2 text-white">
            Price: ${comic.prices[0].price}
          </p>
        </div>
      </section>
      <div className="flex justify-center mb-5">
        <h3 className="text-center text-3xl font-bold text-white bg-blue-500 py-2 px-4 inline-block rounded-lg shadow-lg mt-5">
          Comic Characters
        </h3>
      </div>

      <div className="flex flex-wrap items-center justify-center m-auto gap-10">
        {comic.characters.items.map((e) => (
          <div
            className="flex flex-col justify-center items-center"
            key={e.name}
          >
            <CharacterCard character={e.name}></CharacterCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComicDetails;
