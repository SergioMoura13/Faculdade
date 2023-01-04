package com.organo;

import org.bson.Document;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


/**
 * Controller
 */

@RestController
public class Controller {
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/getUsers")
	public Document getUsers(){
		return Database.getUsers();
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/saveUser")
	public void saveUser(@RequestBody Body body){
		Database.saveUser(body.member, body.teamName);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/delUser")
	public void delUser(@RequestBody Body body){
		Database.delUser(body.member,body.teamName);
	}

	record Body(
			String teamName,
			Members member
			){}


	
	
}
