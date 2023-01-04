import "./Card.css"



function Card(props) {
	const color = props.color;
	console.log(color)
	return (
		<div className="card">
			<div style={{backgroundColor:color}}/>
			<div/>
			<div>
				<img src={props.src} alt="collaborator" />
				<h4>{props.name}</h4>
				<h5>{props.role}</h5>
			</div>
		</div>
	)
}





export default Card
