import "./App.css";
import "./User.scss"
import Home from "./pages/Home";
import {OpenMapTilesProvider,MapView} from "./public/js/geo-three.module"
import Header from "./components/Header/Header";

function App() {
  const provider = new OpenMapTilesProvider();
  const map = new MapView(MapView.PLANAR, provider);
  return (
    <div className="App">
    <Header></Header>
    <Home></Home>
    </div>
  );
}

export default App;
