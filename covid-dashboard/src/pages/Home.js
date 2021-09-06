
import Map from "../components/three/Map";
import MapContainer from "../components/three/MapDataContainer";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Header from "../components/Header/Header.js";
function Home() {
  return (
    <div>
	

	<Header></Header>

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

        <iframe
          width="500"
          height="300"
          src="https://api.maptiler.com/maps/b0cd528b-f6b4-40a6-a7ec-3ad68ff85365/?key=LLaGF9mARrE3KmfAEcZd#11.2/-33.91679/151.23810"
        ></iframe>
        <div id="title-box"></div>

        <MapContainer></MapContainer>
    
    </div>
  );
}

export default Home;
