import CreateComicForm from "../components/CreatedComics/CreateComicForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function CreateComicPage() {
  const sessionState = useSelector((state) => state.session.isAuthenticated);

  if (!sessionState) {
    return <Navigate to="/error" />;
  }
  return (
    <CreateComicForm
      isEditing={false}
      comicData={false}
      closeFunction={false}
    />
  );
}

export default CreateComicPage;
