package com.demo.spring.service;

import com.demo.spring.model.Role;
import com.demo.spring.model.User;
import com.demo.spring.repository.RoleRepository;
import com.demo.spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Optional;
import java.util.UUID;

@Service("userService")
public class UserService {

	@Autowired
    private UserRepository userRepository;
    
	@Autowired
	private RoleRepository roleRepository;
    
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
    @Autowired
    public UserService(UserRepository userRepository,
                       RoleRepository roleRepository,
                       BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
//        Optional<User> u = userRepository.findById();
    }

    public User saveUser(User user) {
    	user.setId(UUID.randomUUID().toString());
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setActive(1);
        Role userRole = roleRepository.findByRole("ADMIN");
        user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
        return userRepository.save(user);
    }
    
    public boolean checkPassword(User user,String password) {
    	return(bCryptPasswordEncoder.matches(password,user.getPassword()));
    }

}