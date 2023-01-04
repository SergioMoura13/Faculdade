import Form from "../Form/Form"
import Input from "../Input/Input"
import Button from "../Button/Button"
import Warning from "../Warning/Warning"
import { useState } from "react"

function CardForm(props) {
	const selectOptions = [
		"Programação",
		"Front-End",
		"Data Science",
		"Devops",
		"UX & Design",
		"Mobile",
		"Inovação e Gestão"
	];
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [image, setImage] = useState("");
	const [teamName, setTeamName] = useState(selectOptions[0]);
	const [formWarning, setFormWarning] = useState("");
	const formData = { name, role, image, teamName };
	return (
		<Form formSubmit={(event) => formSubmit(event, props, formData, setFormWarning)} title="Preencha os dados para criar o card do colaborador">
			<Input value={name} setValue={setName} type="text" label="Nome" holder="Digite seu nome" />
			<Input value={role} setValue={setRole} type="text" label="Cargo" holder="Digite seu cargo" />
			<Input value={image} setValue={setImage} type="text" label="Imagem" holder="Digite o link da sua imagem" />
			<Input value={teamName} setValue={setTeamName} type="selection" label="Time" options={selectOptions} />
			<Button>Criar Card</Button>
			{formWarning !== "" && <Warning warning={formWarning}/>}
		</Form>
	)
}

export default CardForm




function formSubmit(event, props, formData, setFormWarning) {
	const newMember = {
		name: formData.name,
		role: formData.role,
		image: formData.image
	}
	event.preventDefault();
	if (isRepeated(props.teamsList, formData.name)){
	   	setFormWarning("Não podem haver cards com nomes repetidos");
		return;
	}else
		setFormWarning("");
	const index = findTeamIndex(props.teamsList, formData.teamName)
	if (index !== -1)
		insertOnTeam(props.teamsList, props.setTeamsList, index, newMember);
	else
		createNewTeam(props.teamsList, props.setTeamsList, formData.teamName, newMember);
}



function findTeamIndex(teamsList, formTeamName) {
	let index = -1;
	teamsList.forEach((team, teamIndex) => {
		if (team.teamName === formTeamName)
			index = teamIndex;
	})
	return index;
}

function insertOnTeam(teamsList, setTeamsList, index, newMember) {
	const temp = teamsList;
	temp[index].members.push(newMember);
	setTeamsList([...temp]);
}


function createNewTeam(teamsList, setTeamsList, teamName, newMember) {
	setTeamsList([...teamsList, {
		teamName,
		members: [newMember]
	}])
}

function isRepeated(teamsList, name) {
	let repeated = false;
	teamsList.forEach(team => {
		team.members.forEach(member => {
			if(member.name === name)
				repeated = true;
		});
	});
	return repeated;
}


