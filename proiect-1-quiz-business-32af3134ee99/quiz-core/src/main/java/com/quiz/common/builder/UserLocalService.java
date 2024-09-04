package com.quiz.common.builder;

import com.quiz.common.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserLocalService extends JpaRepository<User, UUID> {
}
