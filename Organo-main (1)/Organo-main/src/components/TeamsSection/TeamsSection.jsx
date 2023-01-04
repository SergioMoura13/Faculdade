import Card from "../Card/Card";
import TeamArea from "../TeamArea/TeamArea";
import Underline from "../Underline/Underline";
import "./TeamsSection.css"





function TeamsSection(props) {
	return (
		<section className="team-section">
			<div>
				<h2>Minha Organização:</h2>
				<img src="images/button.png" alt="add symbol"/>
			</div>
			<Underline color="#6278f7" width="4.65em" />
			{props.teamsList.map(generateTeamAreas)}
		</section>
	)



	function generateTeamAreas(team) {
		const colors = findRightColors(team.teamName);
		return (
			<TeamArea key={team.teamName} title={team.teamName} colors={colors}>
				{team.members.map(member => {
					return (
						<Card key={member.name} name={member.name} role={member.role} src={member.image} color={colors.primary} />)
				})}
			</TeamArea>
		)
	}


}

export default TeamsSection










function findRightColors(name) {
	let colors;
	// eslint-disable-next-line
	switch (name) {
		case "Programação":
			colors = { primary: "#57c278", secondary: "#d9f7e9" }
			break;
		case "Front-End":
			colors = { primary: "#82cffa", secondary: "#e8f8ff" }
			break;
		case "Data Science":
			colors = { primary: "#a6d157", secondary: "#f0f8e2" }
			break;
		case "Devops":
			colors = { primary: "#e06b67", secondary: "#fde7e8" }
			break;
		case "UX & Design":
			colors = { primary: "#db6ebf", secondary: "#fae9f5" }
			break;
		case "Mobile":
			colors = { primary: "ffba05", secondary: "#fff5d9" }
			break;
		case "Inovação e Gestão":
			colors = { primary: "#e06b67", secondary: "#fde7e8" }
			break;
	}
	return colors;
}

