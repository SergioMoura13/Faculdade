import React from "react"
import DropDown from "../DropDown/DropDown"
import "./Input.css"



function Input(props) {

	function getValue(event) {
		props.setValue(event.target.value);
	}


	if (props.type === "selection") {
		return (
			<DropDown value={props.value} setValue={props.setValue} label={props.label} options={props.options} />
		)
	}
	else {
		return (
			<React.Fragment>
				<label className="input-label">{props.label}</label>
				<input value={props.value} onChange={getValue} className="input" type={props.type} placeholder={props.holder} />
			</React.Fragment>
		)
	}
}



export default Input 
