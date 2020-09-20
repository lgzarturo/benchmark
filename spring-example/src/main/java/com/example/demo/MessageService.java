package com.example.demo;

public class MessageService {
    private final String message;

    public MessageService(String message) {
        this.message = message;
    }

    public Greeting sayHello(String name) {
        return new Greeting(message + " " + name);
    }
}
