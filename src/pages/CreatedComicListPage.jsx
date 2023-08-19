import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useGetComicsQuery } from "../redux/services/comicApi";
import CreatedComicCard from "../components/CreatedComics/CreatedComicCard";

function CreatedComicListPage() {
  const navigate = useNavigate();

  const { data, isError, isFetching } = useGetComicsQuery();
  useEffect(() => {
    if (isError) {
      navigate("/error");
    }
  }, [isError, navigate]);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <section className="relative top-24">
      {data.length < 1 ? (
        <div className="flex items-center justify-center">
          <h1 className="text-6xl text-blue-500 font-bold text-center">
            No comics created yet!
          </h1>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {data?.map((comic) => (
            <CreatedComicCard comic={comic} key={comic.id} />
          ))}
        </div>
      )}
    </section>
  );
}

export default CreatedComicListPage;
