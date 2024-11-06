import React from "react";
import { useState } from "react";
import "/src/styles/index.css"
import Color from "./Color";

//create your first component
const Home = () => {
	const [color, setColor] = useState("amarillo");
	const [extraColor, setExtraColor] = useState("extra")
	const [intervalo, setIntervalo] = useState(null);
	const [intervaloExtra, setIntervaloExtra] = useState(null);
	const [nuevo, setNuevo] = useState(false)

	const cambioColor = () => {
		setColor((prevColor) => {
			if (prevColor === "rojo") return "verde";
			else if (prevColor === "amarillo") return "rojo";
			else return "amarillo";
		});
	};
	
	const cambioColorExtra = () => {
		setExtraColor((prevColorExtra) => {
			return prevColorExtra === "extra" ? "extrafoco" : "extra";
		});
	};

	const semaforoAutomatico = () => {
		if (!intervalo) {
			const intervaloGen = setInterval(cambioColor , 2000);
			setIntervalo(intervaloGen);
		}
	};
	const semaforoExtra = () => {
		if (!intervaloExtra) {
			const intervaloGen = setInterval(cambioColorExtra , 1000);
			setIntervaloExtra(intervaloGen);
		}
	};

	const automaticosJuntos = () => {
			semaforoAutomatico(),
			semaforoExtra()
	}

	const pararAutomatico = () => {
		if (intervalo) {
			clearInterval(intervalo);
			setExtraColor("extra")
			setIntervalo(null);
		}
	};

	const pararExtra = () => {
		if (intervaloExtra) {
			clearInterval(intervaloExtra);
			setIntervaloExtra(null);
		}
	};

	const pararJuntos = () => {
			pararAutomatico()
			pararExtra()
	}

	const nuevoColor = () => {
		setNuevo(prev => !prev)
	}

	return (
		<>
		<div className="p-4"><h1 className="text-center">Semaforo automatizado</h1></div>
			<div className="container pt-5">
				<div className="semaforo">
					<div onClick={() => setColor("rojo")} className={"rojo" + (color === "rojo" ? "foco" : "")}></div>
					<div onClick={() => setColor("amarillo")} className={"amarillo" + (color === "amarillo" ? "foco" : "")} ></div>
					<div onClick={() => setColor("verde")} className={"verde" + (color === "verde" ? "foco" : "")} ></div>
					<div>
						{nuevo == true ? <Color nombreClase={extraColor} /> : ""}
					</div>
				</div>
			</div>
			<div className="p-4 d-flex justify-content-center">
				<button onClick={automaticosJuntos} >Automatico</button>
				<button onClick={pararJuntos} >Parar</button>
				<button onClick={nuevoColor} >Extra</button>
			</div>
		</>
	);
};

export default Home;
