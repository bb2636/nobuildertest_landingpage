package com.example.backend.service;

import com.example.backend.dto.ContactRequestDto;
import com.example.backend.entity.Contact;
import com.example.backend.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ContactService {

    private final ContactRepository contactRepository;

    @Transactional
    public Contact save(ContactRequestDto dto) {
        Contact contact = Contact.builder()
                .name(dto.getName())
                .email(dto.getEmail())
                .phone(dto.getPhone())
                .message(dto.getMessage())
                .build();
        return contactRepository.save(contact);
    }
}
