import { redirect, useParams, useNavigate } from "react-router-dom";
import {
  useGetComicDetailsByIdQuery,
  useGetComicsQuery,
  useDeleteComicMutation,
} from "../redux/services/comicApi";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import CreatedComicCard from "../components/CreatedComics/CreatedComicCard";
import { useState } from "react";
import ComicForm from "../components/CreatedComics/CreateComicForm";

function CreatedDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isError, isFetching } = useGetComicDetailsByIdQuery(id);
  const { data: comicsData, isFetching: fetchingComics } = useGetComicsQuery();
  const sessionState = useSelector((state) => state.session.isAuthenticated);
  const [deleteComic] = useDeleteComicMutation();
  const [showEditForm, setShowEditForm] = useState(false);

  function deleteComicFunction(id) {
    deleteComic(id);
    navigate("/created-comics");
  }

  if (isFetching) return <Loader />;
  if (isError) {
    navigate("/not-found");
  }

  const filteredComicsData = comicsData?.filter(
    (comic) => comic.id !== parseInt(id)
  );
  return (
    <div className="relative top-24 ">
      <section
        key={data.id}
        className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center justify-items-center w-11/12 shadow-lg rounded p-2 mx-auto "
      >
        <div className="flex flex-col w-1/2">
          <img
            src={data.imageUrl}
            alt={data.comicName}
            className="rounded h-5/6"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="font-bold text-2xl text-center text-gray-800">
            {data.comicName}
          </h2>
          <p className="text-center font-light">{data.description}</p>
          <p className="text-center bg-blue-500 rounded w-30 p-2 text-white">
            Price: ${data.price}.00
          </p>
          {showEditForm && (
            <ComicForm
              isEditing={true}
              comicData={data}
              closeFunction={() => setShowEditForm(false)}
            />
          )}
          {sessionState && (
            <div className="w-full flex items-center justify-center gap-1">
              <p
                className="p-2 bg-green-500 text-white w-20 text-center rounded-md cursor-pointer"
                onClick={() => setShowEditForm(true)}
              >
                Edit
              </p>
              <Modal
                className="p-2 bg-red-500 text-white w-20 text-center rounded-md"
                description={`Are you sure that you want to delete ${data.comicName}`}
                title={"Delete"}
                action={() => deleteComicFunction(data?.id)}
              >
                Delete
              </Modal>
            </div>
          )}
        </div>
      </section>
      <h1 className="text-5xl font-semibold text-white bg-blue-500 rounded-lg py-1 px-2 text-center my-8 mx-auto">
        Our comics
      </h1>
      <div className="flex flex-wrap items-center justify-center m-auto gap-10">
        {fetchingComics ? (
          <Loader />
        ) : (
          filteredComicsData?.map((comic) => (
            <CreatedComicCard comic={comic} key={comic.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default CreatedDetailsPage;
