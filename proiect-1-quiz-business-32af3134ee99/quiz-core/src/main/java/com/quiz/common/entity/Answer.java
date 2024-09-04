package com.quiz.common.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

import java.io.Serial;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "answer")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Answer implements Serializable {
    @Serial
    private static final long serialVersionUID = -2300118083588975177L;

    @Id
    @GeneratedValue
    @UuidGenerator(style = UuidGenerator.Style.AUTO)
    @Column(name = "answer_id", nullable = false, updatable = false)
    private UUID answerId;

    @Column(name = "title", nullable = false)
    @NotBlank
    private String title;

    @Column(name = "is_correct", nullable = false)
    @NotBlank
    private boolean is_correct;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;
}

