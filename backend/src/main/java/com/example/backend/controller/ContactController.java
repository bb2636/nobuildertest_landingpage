package com.example.backend.controller;

import com.example.backend.dto.ContactRequestDto;
import com.example.backend.entity.Contact;
import com.example.backend.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class ContactController {

    private final ContactService contactService;

    @PostMapping("/contact")
    public ResponseEntity<Contact> saveContact(@RequestBody ContactRequestDto dto) {
        Contact saved = contactService.save(dto);
        return ResponseEntity.ok(saved);
    }
}
