import { useContext, useRef, useState } from "react";
import { NavLink, useSearchParams, useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
// Material UI Components and Icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

// Custom hooks
import { useGetCategories } from "../../hooks/useCallAPI";
import useWindowDimensions from "../../hooks/useWindowDimensions";

// Components
import { Button } from "../../components/Button";

// styles
import "./Menu.css";

const Menu = () => {
  const { width } = useWindowDimensions();
  const [toggle, setToggle] = useState();
  // Movies
  const { state, inputValue, setInputValue } = useContext(AppContext);
  const searchInput = useRef(null);
  const [search, setSearch] = useSearchParams();

  const categories = useGetCategories(state.routes.categoryList);

  const navigate = useNavigate();

  // function
  const handleRoute = () => {
    setToggle(!toggle);
  };

  const handleSearch = () => {
    navigate("/search/movie");
    setInputValue(searchInput.current.value);
    if (inputValue !== "") {
      setSearch({ query: searchInput.current.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return search;
  };

  if (width <= 768) {
    return (
      <nav className="menu__container--mobile">
        <form className="menu__item--search">
          <input
            type="text"
            placeholder="search"
            value={inputValue}
            ref={searchInput}
            onChange={handleSearch}
            onClick={handleSubmit}
          />
          <SearchIcon style={searchButton} className="menu__item--icon" />
        </form>
        <MenuIcon
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
      </nav>
    );
  } else {
    return <div>Otro Menu</div>;
  }
};

const MenuMobile = ({ handleRoute, categories, navigation }) => {
  return (
    <>
      <div className="abc">
        <ul>
          {navigation.map((item) => (
            <li
              key={item.location}
              className={"subtitle__category"}
              onClick={() => handleRoute()}
            >
              <NavLink to={item.location}>
                {item.icon} {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <h5 className={"title__category"}>Categories</h5>
          <ul>
            {categories.map((category) => (
              <li
                key={category.id}
                className={"subtitle__category"}
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
    </>
  );
};

const navigation = [
  {
    name: "Home",
    location: "/",
    icon: "🏠",
  },
];

// styles
const searchButton = {
  /* Mobile Size */
  background: "transparent",
  borderRadius: "0px 10px 10px 0px",
  position: "absolute",
  right: "2px",
};
export default Menu;
