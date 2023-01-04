import "./Form.css"


function Form(props) {
	return (
		<section id="form-section">
			<div id="form-container">
				<h3>{props.title}</h3>
				<form onSubmit={props.formSubmit} id="form">
					{props.children}
				</form>
			</div>
		</section>
	)
}



export default Form





