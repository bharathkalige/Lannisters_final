package com.demo.spring;

public class MyResponse {
private String message;
private String userId;
private boolean registerSuccess;
private boolean loginSuccess;


public boolean isLoginSuccess() {
	return loginSuccess;
}

public void setLoginSuccess(boolean loginSuccess) {
	this.loginSuccess = loginSuccess;
}

public boolean isRegisterSuccess() {
	return registerSuccess;
}

public void setRegisterSuccess(boolean registerSuccess) {
	this.registerSuccess = registerSuccess;
}

public String getUserId() {
	return userId;
}

public void setUserId(String userId) {
	this.userId = userId;
}

public String getMessage() {
	return message;
}

public void setMessage(String message) {
	this.message = message;
}

}
