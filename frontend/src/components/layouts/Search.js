import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [keyword, setkeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault(); //wiill disable auto reloading/loading when submitting
    navigate(`/search/${keyword}`);
  };
  return (
    <form>
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          className="form-control"
          placeholder="Enter Product Name ..."
          onChange={(e) => {
            setkeyword(e.target.value);
          }}
          value={keyword}
        />
        <div className="input-group-append">
          <button id="search_btn" className="btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
