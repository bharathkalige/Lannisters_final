package com.demo.spring;

import com.demo.spring.model.User;
import com.demo.spring.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin()
public class LoginController {

	@Autowired
	private UserService userService;

	@PostMapping(path = "/registration", produces = {
			MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MyResponse> createNewUser(@RequestBody User user) {
		User userExists = userService.findUserByEmail(user.getEmail());
		System.out.println(user.getEmail());
		if (userExists != null) {
			MyResponse resp = new MyResponse();
			resp.setMessage("There is already a user registered with the email: " + user.getEmail());
			resp.setUserId(null);
			resp.setRegisterSuccess(false);
			return ResponseEntity.ok(resp);
		}

		else {
			userService.saveUser(user);
			MyResponse resp = new MyResponse();
			resp.setMessage("User has been registered successfully with email: " + user.getEmail());
			resp.setUserId(user.getId());
			resp.setRegisterSuccess(true);
			return ResponseEntity.ok(resp);
		}
	}

	@PostMapping(path = "/signin", produces = {
			MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MyResponse> findUser(@RequestBody User user) {
		User userExists = userService.findUserByEmail(user.getEmail());
		if (userExists != null && userService.checkPassword(userExists, user.getPassword())) {
			MyResponse resp = new MyResponse();
			resp.setMessage("User Exists with the email and correct password: " + user.getEmail());
			resp.setUserId(userExists.getId());
			resp.setLoginSuccess(true);
			return ResponseEntity.ok(resp);
		} else if (userExists != null) {
			MyResponse resp = new MyResponse();
			resp.setMessage("User Exists with the email and incorrect password: " + user.getEmail());
			resp.setUserId(userExists.getId());
			resp.setLoginSuccess(false);
			return ResponseEntity.ok(resp);
		} else {
			MyResponse resp = new MyResponse();
			resp.setMessage("User Not Exists with email : " + user.getEmail());
			resp.setUserId(null);
			return ResponseEntity.ok(resp);
		}
	}
}
