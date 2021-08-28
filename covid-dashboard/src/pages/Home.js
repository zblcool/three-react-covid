
import { Canvas } from "@react-three/fiber";
import Map from "../components/three/Map";
import MapContainer from "../components/three/MapDataContainer";

function Home() {
  return (
    <div id="canvas-container">
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
      <h1>Hi</h1>
      <iframe width="500" height="300" src="https://api.maptiler.com/maps/b0cd528b-f6b4-40a6-a7ec-3ad68ff85365/?key=LLaGF9mARrE3KmfAEcZd#11.2/-33.91679/151.23810"></iframe>
      <div id="title-box">

			<div id="title">
				Our Beautiful Earth
			</div>

			<div id="subtitle">
				By DAVID GRICE
			</div>

		</div>

		<div id="instruction-box">

			<div id="instruction-title">
				INSTRUCTIONS
			</div>

			<div id="instruction-body">

				<h1>
					Click and drag your mouse around to see the full globe
					<br/>
					Click on the points of interest to display their information
					<br/>
					Zoom in and out using your mouse scroll wheel
					<br/>
					Have fun exploring the world!
				</h1>
				
			</div>

		</div>

		<div id="display-box">

			<div id="display-box-title">
				Choose an option below!
			</div>

			<button id="country">
				Click here for countries!
			</button>

			<button id="instructions">
				Click here for instructions!
			</button>

		</div>

		<div id="info-box">

			<div id="info-title">
				Information
			</div>

			<div id="region">
				Region: 
			</div>

			<div id="country-info">
				Country: 
			</div>

			<div id="language">
				Language: 
			</div>

			<div id="population">
				Population: 
			</div>

			<div id="area-sq-mi">
				Area(mile^2): 
			</div>

			<div id="gdp-per-capita">
				 GDP Per-Capita: 
			</div>

			<div id="climate">
				 Climate: 
			</div>

		</div>

        <MapContainer></MapContainer>
    </div>
  );
}

export default Home;
