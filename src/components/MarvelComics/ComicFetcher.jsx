import { useGetComicByIdQuery } from "../../redux/services/marvelApi";
import ComicCard from "./ComicCard";
import { redirect } from "react-router-dom";
import Loader from "../Loader";

function ComicFetcher({ urlId }) {
  const {
    data: comicsCharacterData,
    isError,
    isFetching,
  } = useGetComicByIdQuery(urlId);
  if (isError === 0) return redirect("/error");
  if (isFetching) return <Loader />;

  return (
    <>{comicsCharacterData && <ComicCard comic={comicsCharacterData} />}</>
  );
}

export default ComicFetcher;
