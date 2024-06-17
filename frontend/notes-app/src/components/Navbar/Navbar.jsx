import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const Navbar = ({ userInfo }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="bg-white flex items-center justify-center gap-3 md:justify-between px-6 py-2 drop-shadow">
      <h2 className="font-bold text-lg md:text-xl  text-black py-2">
        DailyNotes
      </h2>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      {userInfo && <ProfileInfo userInfo={userInfo} onLogout={onLogout} />}
    </div>
  );
};

export default Navbar;
