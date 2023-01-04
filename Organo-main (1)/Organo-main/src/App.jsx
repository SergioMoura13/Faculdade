import { useState } from 'react';
import Banner from './components/Banner/Banner';
import CardForm from './components/CardForm/CardForm';
import Footer from './components/Footer/Footer';
import TeamsSection from './components/TeamsSection/TeamsSection';


function App() {
	const [teamsList, setTeamsList] = useState([]);
	return (
		<div className="App">
			<Banner />
		    <CardForm teamsList={teamsList} setTeamsList={setTeamsList}/>
			<TeamsSection teamsList={teamsList}/>
			<Footer />
		</div>
	);
}


export default App;










