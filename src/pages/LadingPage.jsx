import ComicCard from "../components/MarvelComics/ComicCard";
import Loader from "../components/Loader";
import IMAGES from "../images/Images";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { useGetTopComicsQuery } from "../redux/services/marvelApi";
import { useGetComicsQuery } from "../redux/services/comicApi";
import { useNavigate } from "react-router-dom";
import CreatedComicCard from "../components/CreatedComics/CreatedComicCard";

function LandingPage() {
  const navigate = useNavigate();
  const { data: comicData, isFetching, isError } = useGetTopComicsQuery();
  const { data: createdComicData } = useGetComicsQuery();
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (isFetching) return <Loader />;
  if (isError) return navigate("/error");

  return (
    <motion.div>
      <section className="flex w-full flex-wrap gap-5 justify-center items-center">
        <div className="w-full">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            interval={3000}
          >
            {IMAGES.map((img) => (
              <div key={img}>
                <img src={img} className="w-full h-[650px] rounded-lg" alt="" />
              </div>
            ))}
          </Carousel>
        </div>
        <motion.h1
          className="text-5xl font-semibold text-white bg-blue-500 rounded-lg py-1 px-2 text-center mt-8"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Products
        </motion.h1>
        {comicData ? (
          <div className="flex w-full flex-wrap gap-5 justify-center items-center">
            {comicData.data.results.map((comic) => (
              <ComicCard comic={comic} key={comic.id} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
        <motion.h1
          className="text-5xl font-semibold text-white bg-blue-500 rounded-lg py-1 px-2 text-center mt-8"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Our comics
        </motion.h1>

        <div className="flex w-full flex-wrap gap-5 justify-center items-center">
          {createdComicData ? (
            createdComicData.map((comic) => (
              <CreatedComicCard comic={comic} key={comic.id} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </section>

      <footer className="bg-blue-500 py-4 px-6 text-white text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Alura Geek</p>
      </footer>
    </motion.div>
  );
}

export default LandingPage;
