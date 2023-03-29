package com.cb.controller;

import com.cb.model.Products;
import com.cb.service.ProductsNotFoundException;
import com.cb.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Optional;
import java.util.function.DoubleToIntFunction;

@Controller
public class ProductController {

    @Autowired
    private ProductsService service;

//    @GetMapping("/product")
//    public String productPage() {
//        return "product";
//    }


    @GetMapping("/product")
    public String showUserList(@Param("keyword") String keyword, Model model, RedirectAttributes ra) {
        model.addAttribute("product", new Products());
        model.addAttribute("pageTitle", "Add New");

        if (keyword == null || keyword.equals("AllProducts")){
            List<Products> listProducts = service.listAll();
            model.addAttribute("listProducts", listProducts);
            return "product";
        }
        else {
            System.out.println("keyword: "+ keyword);
            String key = "\""+ keyword + "*"+ "\"";;
            System.out.println("keyword: "+ key);
            List<Products> listProducts = service.searchResult(key);
            System.out.println("list: "+ listProducts);
            model.addAttribute("listProducts", listProducts);
            ra.addAttribute("message", "Search result of "+ keyword);
            return "product";
        }

    }


    @PostMapping(value = "/product/save")
    public String saveUser(Products products,RedirectAttributes ra) throws ProductsNotFoundException {
        try{
            service.save(products);
            ra.addFlashAttribute("message", "The product "+products.getName()+" has been update successfully");
            return "redirect:/product";
        } catch (Exception e) {
            ra.addFlashAttribute("message", products.getName()+" is already in database");
            return "redirect:/product";
        }
    }

    @RequestMapping(value = "/product/delete", method = {RequestMethod.DELETE, RequestMethod.GET})
    public String delete(Long id, RedirectAttributes ra,Model model) {
        try{
            ra.addFlashAttribute("message", "The product "+service.get(id).getName()+" has been deleted");
            service.delete(id);
            return "redirect:/product";
        }catch (Exception e){
            System.out.println("error");
            ra.addFlashAttribute("message", "some error");
            return "redirect:/product";
        }
    }

    @RequestMapping("product/getOne")
    @ResponseBody
    public Optional<Products> getOne(Long id, Model model) {
        Optional<Products> products = service.getOne(id);
        model.addAttribute("product", products);
        return service.getOne(id);
    }

    @RequestMapping(value = "/product/update", method = {RequestMethod.PUT, RequestMethod.GET})
    public String updateUser(Long id, Products products, Model model, RedirectAttributes ra) {
        return updateProducts(id, products, model, ra,"redirect:/product");
    }

    private String updateProducts(Long id, Products products, Model model, RedirectAttributes ra, String url) {
        try {
            model.addAttribute("products", products);
            service.update(products);
            ra.addFlashAttribute("message", "The product "+service.get(id).getName() + " has been update successfully");
            return url;
        } catch (ProductsNotFoundException e) {
            ra.addFlashAttribute("message", "cant find");
            return url;
        }
    }

}


