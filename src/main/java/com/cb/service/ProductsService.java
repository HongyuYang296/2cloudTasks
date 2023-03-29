package com.cb.service;

import com.cb.model.Products;
import com.cb.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProductsService {
    @Autowired
    private ProductsRepository repository;

    public List<Products> listAll() {
        return (List<Products>) repository.findAll();
    }

    public List<Products> search() {
        return (List<Products>) repository.findAll();
    }

    public void save(Products products) {
        repository.save(products);
    }



    public void update(Products user) {
        repository.save(user);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public List<Products> searchResult(String keyword){
        return repository.search(keyword);
    }




    public Products get(Long id) throws ProductsNotFoundException {
        Optional<Products> result = repository.findById(id);
        if (result.isPresent()) {
            return result.get();
        }
        throw new ProductsNotFoundException("Could not find any users with ID "+ id);
    }

    public Optional<Products> getOne(Long id) {
        return repository.findById(id);
    }




}
