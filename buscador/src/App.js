import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
	return (
		<div className="container">
			<h1 className="title">Buscador CEP</h1>

			<div className="containerInput">
				<input type="text" placeholder="Digite seu CEP..." />

				<button className="buttonSearch">
					<FiSearch size={25} color="#fff" />
				</button>
			</div>

			<main className="main">
				<h1>CEP: 79003222</h1>

				<span>Rua teste algum</span>
				<span>Complemento: algum Complemento</span>
				<span>Vila Rosa</span>
				<span>Campo Grande - MS</span>
			</main>
		</div>
	);
}

export default App;
