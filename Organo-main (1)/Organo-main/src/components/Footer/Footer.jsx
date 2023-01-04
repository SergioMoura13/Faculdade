import "./Footer.css"



function Footer() {
	return (
		<footer style={{ backgroundColor: "#6278f7", backgroundImage: "url(images/fundo.png)", height:"15.22em"}}>
			<div>
				<a href="/"><img src="images/fb.png" alt="Facebook icon" /></a>
				<a href="/"><img src="images/tw.png" alt="Twitter icon" /></a>
				<a href="/"><img src="images/ig.png" alt="Instagram icon" /></a>
			</div>
			<img src="images/logo.png" alt="logo" />
			<p>Desenvolvido por Alura</p>
		</footer>
	)
}


export default Footer
