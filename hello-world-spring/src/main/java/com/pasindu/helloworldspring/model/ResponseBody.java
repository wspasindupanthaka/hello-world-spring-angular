package com.pasindu.helloworldspring.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ResponseBody {
    private String message;

    public ResponseBody(String message) {
        this.message = message;
    }
}
