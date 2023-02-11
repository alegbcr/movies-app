// components
import CarouselPreview from "../containers/CarouselPreview";
import MoviesContainer from "../containers/MovieContainer";

const HomePage = () => {
  return (
    <>
      <CarouselPreview API={customApi[0].route} />
      <MoviesContainer
        text="Trending Preview"
        direction="row"
        API={customApi[1].route}
        to={customApi[1].to}
      />
      <MoviesContainer
        text="Upcoming Movies Preview"
        direction="row"
        API={customApi[2].route}
        to={customApi[2].to}
      />
    </>
  );
};

const customApi = [
  {
    name: "discover",
    route: "/movie/popular",
    to: null,
  },
  {
    name: "trending",
    route: "/trending/movie/day",
    to: "/trending",
  },
  {
    name: "upcoming",
    route: "/movie/upcoming",
    to: "upcoming",
  },
];

export default HomePage;
