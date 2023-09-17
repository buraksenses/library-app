package com.sirhot.springbootlibrary.controller;

import com.sirhot.springbootlibrary.entity.Message;
import com.sirhot.springbootlibrary.service.MessagesService;
import com.sirhot.springbootlibrary.utils.ExtractJWT;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/messages")
public class MessageController {
    private MessagesService messagesService;

    public MessageController(MessagesService messagesService) {
        this.messagesService = messagesService;
    }

    @PostMapping("/secure/add/message")
    public void postMessage(@RequestHeader(value = "Authorization") String token,
                            @RequestBody Message messageRequest) {
        String userEmail = ExtractJWT.payloadJWTExtraction(token,"\"sub\"");
        messagesService.postMessage(messageRequest,userEmail);
    }
}
