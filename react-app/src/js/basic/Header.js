import { Link } from "react-router-dom";

const Header = ({ setSelectedRoute }) => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <nav>
        <div className="radio-container">
          <input
            defaultChecked
            id="radio-premium"
            name="radio"
            type="radio"
            value="/"
            onChange={(e) => setSelectedRoute(e.target.value)}
          />
          <label for="radio-premium">Home</label>
          <input
            id="radio-free"
            name="radio"
            type="radio"
            value="/Portfolio"
            onChange={(e) => setSelectedRoute(e.target.value)}
          />
          <label for="radio-free">Portfolio</label>
          <input
            id="radio-basic"
            name="radio"
            type="radio"
            value="/Animation"
            onChange={(e) => setSelectedRoute(e.target.value)}
          />
          <label for="radio-basic">Animation</label>
          <div className="glider-container">
            <div className="glider"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
