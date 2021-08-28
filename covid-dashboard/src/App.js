import "./App.css";
import Home from "./pages/Home";
import {OpenMapTilesProvider,MapView} from "./public/js/geo-three.module"

function App() {
  const provider = new OpenMapTilesProvider();
  const map = new MapView(MapView.PLANAR, provider);
  return (
    <Home></Home>
  );
}

export default App;
