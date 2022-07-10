import './App.css';
import Register from "./components/Register"
import Search from "./components/Search"
import Navbar from "./components/Navbar"
// import Article from "./components/Article";
// import TopItem from "./components/TopItem";
// import Recommended from "./components/Recommended";
function App() {
  return (
    <div>
      <div className="main">
      <Register />
      <Search />
      <Navbar />
      </div>
      
      {/* <Article /> */}
      {/* <TopItem /> */}
      {/* <Recommended /> */}
    </div>
  );
}

export default App;
