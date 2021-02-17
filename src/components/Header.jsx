import "../css/App.css";
import { useSelector, useDispatch } from "react-redux";
import { renderResults, renderSearch } from "../actions";

function Header() {
  const state = useSelector((state) => state.mainState);
  const dispatch = useDispatch();

  return (
    <div className="App-header">
      <h1 className="App-name">
        <a href="./">Simply delicious</a>
      </h1>
      <button
        onClick={() => {
          if (state === "recipe") {
            dispatch(renderResults());
          } else if (state === "searchResults") {
            dispatch(renderSearch());
          } else {
            dispatch(renderSearch());
          }
        }}
      >
        Go back
      </button>
    </div>
  );
}

export default Header;
