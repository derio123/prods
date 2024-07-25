package com.derio.springProdutos.service;

import com.derio.springProdutos.model.User;

public interface UserService {
    User findByEmail(String email);
    User saveUser(User user);
}
