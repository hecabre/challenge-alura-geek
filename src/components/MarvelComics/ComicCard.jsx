import { Link } from "react-router-dom";
import Btn from "../Btn";
import ComicImage from "./ComicImage";

function ComicCard({ comic }) {
  const createPrice = () => {
    return Math.floor(Math.random() * (15 - 1 + 1) + 1);
  };
  
  return (
    <Link to={`/comic/${comic?.id}`}>
      <div className="w-30 bg-white-900 rounded-md flex flex-wrap flex-col justify-center items-center mt-2 text-gray-800 bg-gray-100 shadow-lg p-5 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
        <h2 className="whitespace-wrap w-[200px] text-center font-light">
          {comic?.title}
        </h2>
        <ComicImage
          urlImg={comic?.thumbnail.path}
          comicTitle={comic?.title}
          imgExtension={comic?.thumbnail.extension}
          className="flex flex-col w-1/2"
        />
        {comic?.prices[0].price > 1 ? (
          <p className="text-center text-gray-700 font-light">
            Price: ${comic?.prices[0].price}
          </p>
        ) : (
          <p className="text-gray-700 font-light">Price: ${createPrice()}.99</p>
        )}
        <Btn
          type={"submit"}
          text={"See Details"}
          redirect={true}
          redirectPath={`/comic/${comic?.id}`}
        />
      </div>
    </Link>
  );
}

export default ComicCard;
