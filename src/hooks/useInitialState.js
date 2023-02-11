import { useState } from "react";

// Initial State
const initialState = {
  routes: {
    popular: "/movie/popular",
    trending: "/trending/movie/day",
    upcoming: "/movie/upcoming",
    categories: "/discover/movie",
    movieDetail: "/movie/",
    movieSimilar: "/similar",
    categoryList: "/genre/movie/list",
    search: "/search/movie",
  },
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [inputValue, setInputValue] = useState("");
  const [returnPage, setReturnPage] = useState(false);
  return { state, inputValue, setInputValue, returnPage, setReturnPage };
};

export { useInitialState };
