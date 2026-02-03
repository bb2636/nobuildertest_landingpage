package com.example.backend.controller;

import com.example.backend.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class DbCheckController {

    private final ContactRepository contactRepository;

    @GetMapping("/db-check")
    public ResponseEntity<Map<String, Object>> dbCheck() {
        long count = contactRepository.count();
        return ResponseEntity.ok(Map.of(
                "status", "ok",
                "message", "DB 연결 성공",
                "contactsCount", count
        ));
    }
}
