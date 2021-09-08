import Map from "../components/three/Map";
import MapContainer from "../components/three/MapDataContainer";
import TwoDimensionMap from "../components/TwoDimensionMap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Home() {
  return (
    
      <div>
        

        {/* 
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
      */}
        <Switch>
          <Route exact path="/">
           Welcome
          </Route>
          <Route exact path="/global" component={MapContainer}> 
            
          </Route>
          <Route exact path="/lastWeek" component={TwoDimensionMap}>
 
          </Route>
          <Route exact path="/about">
            <p>hi</p>
          </Route>
        </Switch>
      </div>
  );
}

export default Home;
