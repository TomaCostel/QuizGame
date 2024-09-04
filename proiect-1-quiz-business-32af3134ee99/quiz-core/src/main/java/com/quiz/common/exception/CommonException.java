package com.quiz.common.exception;

import java.io.Serial;

public class CommonException extends Exception {
    @Serial
    private static final long serialVersionUID = -5121193433138541402L;

    public CommonException() {
        super("Quiz Common Exception");
    }
}
