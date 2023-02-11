import { useState, useEffect } from "react";
import axios from "axios";

const apiAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: import.meta.env.VITE_KEY_SECRET,
  },
});

// GET all information from movies
const useGetMovies = (API) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const { data } = await apiAxios.get(API);
      setMovies(data.results);
    };
    getMovies();
  }, []);
  return movies;
};

// GET all information from movies
const useGetMovieById = (API) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await apiAxios.get(API);
      setMovies(data);
    };
    getMovies();
  }, [API]);

  return movies;
};

// GET all information from categories
const useGetCategories = (API) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await apiAxios.get(API);
      setCategories(data.genres);
    };
    getCategories();
  }, []);
  return categories;
};

// GET all movies of categories
const useGetMoviesByCategories = (API, id) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await apiAxios.get(API, { params: { with_genres: id } });
      setMovies(data.results);
    };
    getMovies();
  }, [API, id]);
  return { movies };
};

// GET all movies by search input
const useGetMoviesBySearch = (API, query) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await apiAxios(API, {
        params: { query },
      });
      setMovies(data.results);
    };
    getMovies();
  }, [API, query]);
  return movies;
};

export {
  useGetMovies,
  useGetMovieById,
  useGetCategories,
  useGetMoviesByCategories,
  useGetMoviesBySearch,
};
