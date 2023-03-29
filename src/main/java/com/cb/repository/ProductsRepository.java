package com.cb.repository;

import com.cb.model.Products;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("ProductsRepository")
public interface ProductsRepository extends CrudRepository<Products, Long> {

    @Query(value = "select * from products where\n" +
            "match (code, name, price, size, color, type)\n" +
            "against (?1 IN BOOLEAN MODE)",
            nativeQuery = true)
    public List<Products> search(String keyword);






}
