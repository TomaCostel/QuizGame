package com.quiz.common.entity;


import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.UUID;


@Entity
@Table
public class User implements Serializable {
    @Serial
    private static final long serialVersionUID = -3075717793248075794L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private UUID userId;
}
