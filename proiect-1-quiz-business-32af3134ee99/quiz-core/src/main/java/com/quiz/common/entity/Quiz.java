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
@Table(name = "quiz")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Quiz implements Serializable {
    @Serial
    private static final long serialVersionUID = -5449879273360017296L;

    @Id
    @GeneratedValue
    @UuidGenerator(style = UuidGenerator.Style.AUTO)
    @Column(name = "quiz_id", nullable = false, updatable = false)
    private UUID quizId;

    @Column(name = "title", nullable = false)
    @NotBlank
    private String title;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserInfo createdBy;

    @OneToOne
    @JoinColumn(name = "quiz_role_id")
    private QuizRole quizRole;

    @OneToMany(mappedBy = "quiz")
    private List<Question> questions;
}
