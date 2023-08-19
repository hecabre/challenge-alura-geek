import { Link } from "react-router-dom";

function CreatedComicCard({ comic }) {
  return (
    <Link to={`/created-comics/${comic.id}`}>
      <div className="flex items-center justify-center flex-col shadow-lg bg-gray-100 py-2 px-1 rounded cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
        <p className="text-center text-gray-700 font-light w-[200px]">
          {comic.comicName}
        </p>
        <img
          src={comic.imageUrl}
          alt={comic.comicName}
          className="h-32 w-32 rounded"
        />
        <p className="text-center text-gray-700 font-light">
          Price: ${comic.price}.00
        </p>
        <Link
          className="bg-blue-500 rounded w-full flex justify-center p-2 text-white font-light cursor-pointer"
          to={`/created-comics/${comic.id}`}
        >
          Details
        </Link>
      </div>
    </Link>
  );
}

export default CreatedComicCard;
