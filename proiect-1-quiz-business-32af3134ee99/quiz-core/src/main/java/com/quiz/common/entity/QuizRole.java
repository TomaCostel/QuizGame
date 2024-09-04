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
@Table(name = "quiz_role")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuizRole implements Serializable {

    @Serial
    private static final long serialVersionUID = -9152156440193530045L;

    @Id
    @GeneratedValue
    @UuidGenerator(style = UuidGenerator.Style.AUTO)
    @Column(name = "quiz_role_id", nullable = false, updatable = false)
    private UUID quizRoleId;

    @Column(name = "role", nullable = false)
    @NotBlank
    private String role;

    @OneToMany(mappedBy = "quizRole")
    private List<Quiz> quizzes;
}