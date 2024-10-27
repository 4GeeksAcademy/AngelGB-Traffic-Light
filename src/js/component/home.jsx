import React from "react";
import { useState } from "react";
import "/src/styles/index.css"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setcolor] = useState("amarillo")
	return (
		<>
		<div className="container">
			<div className="semaforo">
				<div onClick={() => setcolor("rojo")} className={"rojo" + (color === "rojo" ? "foco" : "")}>1</div>
				<div onClick={() => setcolor("amarillo")} className={"amarillo" + (color === "amarillo" ? "foco" : "")} >2</div>
				<div onClick={() => setcolor("verde")} className={"verde" + (color === "verde" ? "foco" : "")} >3</div>
			</div>
		</div>
			<div className="p-4 d-flex justify-content-center">
				<button>1</button>
				<button>2</button>
			</div>
		</>
	);
};

export default Home;
