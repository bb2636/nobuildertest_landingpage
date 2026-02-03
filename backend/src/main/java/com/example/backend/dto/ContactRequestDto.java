package com.example.backend.dto;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ContactRequestDto {
    private String name;
    private String email;
    private String phone;
    private String message;
}
