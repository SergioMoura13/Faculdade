import Underline from "../Underline/Underline"
import "./TeamArea.css"


function TeamArea(props) {
	const colors = props.colors;
	return (
		<div className="team-area" style={{ backgroundColor: colors.secondary }}>
			<div>
				<h3>{props.title}</h3>
				<Underline color={colors.primary} width="2.5em" />
			</div>
			{props.children}
		</div>
	)
}

export default TeamArea
