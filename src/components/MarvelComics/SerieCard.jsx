import { useGetSerieQuery } from "../../redux/services/marvelApi";
import Btn from "../Btn";
import Loader from "../Loader";
import { redirect } from "react-router-dom";

function SerieCard({ serieId }) {
  const { data: serie, isError, isFetching } = useGetSerieQuery(serieId);
  if (isError) {
    return redirect("/error");
  }

  if (isFetching) {
    return <Loader />;
  }

  return (
    <div className="w-auto bg-white-900 rounded-md flex flex-wrap flex-col justify-center items-center mt-2 text-black bg-gray-100 p-3 gap-y-3">
      <p className="w-2/3 text-center text-sm sm:text-xs">
        {serie?.data.results[0].title}
      </p>
      {serie?.data.results[0].thumbnail.extension ? (
        <img
          className="h-56  flex flex-col w-auto rounded"
          src={`${serie?.data.results[0].thumbnail.path}.${serie?.data.results[0].thumbnail.extension}`}
        />
      ) : (
        <Loader />
      )}

      <Btn
        type={"submit"}
        text={"See Details"}
        redirect={true}
        redirectPath={`/series/${serieId}`}
      />
    </div>
  );
}

export default SerieCard;
