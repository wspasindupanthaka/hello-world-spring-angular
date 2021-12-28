package com.pasindu.helloworldspring.controller;

import com.pasindu.helloworldspring.model.ResponseBody;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.ResponseEntity.ok;

@RequestMapping
@RestController
public class HelloWorldController {

    @GetMapping("/hello-world")
    @CrossOrigin(origins = "*")
    public ResponseEntity<ResponseBody> helloWorld() {
        return ResponseEntity.ok(new ResponseBody("Hello World!"));
    }
}
