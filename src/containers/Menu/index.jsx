import { useContext, useRef, useState } from "react";
import { NavLink, useSearchParams, useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

// Icons
import { FaSearch, FaStream } from "react-icons/fa";

// Custom hooks
import { useGetCategories } from "../../hooks/useCallAPI";
import useWindowDimensions from "../../hooks/useWindowDimensions";

// styles
import "./Menu.css";

const Menu = () => {
  const { width } = useWindowDimensions();
  const [toggle, setToggle] = useState();
  const navigate = useNavigate();
  // Movies
  const { state, inputValue, setInputValue } = useContext(AppContext);
  const searchInput = useRef(null);
  const [search, setSearch] = useSearchParams();
  const categories = useGetCategories(state.routes.categoryList);

  // Change the toggle value
  const handleRoute = () => {
    setToggle(!toggle);
  };

  // Find a movie
  const handleSearch = () => {
    navigate("/search/movie");
    setInputValue(searchInput.current.value);
    if (inputValue !== "") {
      setSearch({ query: searchInput.current.value });
    }
  };

  // Submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    return search;
  };

  return (
    <nav className="menu__container">
      {width <= 768 ? (
        <>
          <form className="menu__item--search">
            <input
              type="text"
              placeholder="search"
              value={inputValue}
              ref={searchInput}
              onChange={handleSearch}
              onClick={handleSubmit}
            />
            <FaSearch className="menu__item--icon" />
          </form>
          <FaStream
            onClick={() => setToggle(!toggle)}
            className="menu__item--toggle"
          />
          {toggle ? (
            <MenuMobile
              handleRoute={handleRoute}
              categories={categories}
              navigation={navigation}
            />
          ) : null}
        </>
      ) : (
        <>
          <div className="menu__container--desktop">
            <picture style={{ display: "flex", maxWidth: "100%" }}>
              <img
                style={{ width: "120px" }}
                src="https://i.postimg.cc/TPfc3PFS/mind-world.png"
                alt=""
              />
            </picture>
            <ul className="menu-list__container">
              <li>{navigation[0].name}</li>
              <li onClick={() => setToggle(!toggle)}>Categories</li>
            </ul>
            {toggle ? (
              <CategoryList
                handleRoute={handleRoute}
                categories={categories}
                navigation={navigation}
              />
            ) : null}
            <form className="menu__item--search">
              <input
                type="text"
                placeholder="search"
                value={inputValue}
                ref={searchInput}
                onChange={handleSearch}
                onClick={handleSubmit}
              />
              <FaSearch className="menu__item--icon" />
            </form>
          </div>
        </>
      )}
    </nav>
  );
};

const MenuMobile = ({ handleRoute, categories, navigation }) => {
  return (
    <div className="menu__container--mobile">
      <ul className="menu-list__container--mobile">
        {navigation.map((item) => (
          <li
            key={item.location}
            className="menu-list__subtitle"
            onClick={() => handleRoute()}
          >
            <NavLink to={item.location}>
              {item.icon} {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <h5 className="menu-list__title">Categories</h5>
        <ul className="menu-list__container--mobile">
          {categories.map((category) => (
            <li
              key={category.id}
              className="menu-list__subtitle"
              onClick={() => handleRoute()}
            >
              <NavLink to={`/categories/${category.id}`}>
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CategoryList = ({ handleRoute, categories }) => {
  return (
    <div className="category__container">
      <ul className="category__container--items">
        {categories.map((category) => (
          <li
            className="category__items--name"
            key={category.id}
            onClick={() => handleRoute()}
          >
            <NavLink to={`/categories/${category.id}`}>{category.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const navigation = [
  {
    name: "Home",
    location: "/",
    icon: "🏠",
  },
];

export default Menu;
