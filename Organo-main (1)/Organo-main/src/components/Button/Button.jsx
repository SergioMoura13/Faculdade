import React from "react"
import "./Button.css"



function Button(props){
	return (
		<React.Fragment>
			<button id="card-form-button">{props.children}</button>
		</React.Fragment>
	)
}


export default Button
