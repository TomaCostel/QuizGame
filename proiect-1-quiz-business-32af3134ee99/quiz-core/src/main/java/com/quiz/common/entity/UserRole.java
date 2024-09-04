package com.quiz.common.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "user_role")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserRole implements Serializable {
    @Serial
    private static final long serialVersionUID = 4845686409989762068L;

    @Id
    @GeneratedValue
    @UuidGenerator(style = UuidGenerator.Style.AUTO)
    @Column(name = "user_role_id", nullable = false, updatable = false)
    private UUID userRoleId;

    @Column(name = "role", nullable = false)
    @NotBlank
    private String role;

    @OneToMany(mappedBy = "userRole")
    private List<UserInfo> users;
}
