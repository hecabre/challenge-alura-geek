import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import LandingPage from "./pages/LadingPage";
import ComicDetailsPage from "./pages/ComicDetailsPage";
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SerieDetailsPage from "./pages/SerieDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import CreateComicPage from "./pages/CreateComicPage";
import NotFoundPage from "./pages/NotFoundPage";
import CreatedComicListPage from "./pages/CreatedComicListPage";
import CreatedDetailsPage from "./pages/CreatedDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/comic/:id" element={<ComicDetailsPage />} />
        <Route path="/character/:name" element={<CharacterDetailsPage />} />
        <Route path="/series/:id" element={<SerieDetailsPage />} />
        <Route path="/create-comic/" element={<CreateComicPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/created-comics" element={<CreatedComicListPage />} />
        <Route path="/created-comics/:id" element={<CreatedDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
