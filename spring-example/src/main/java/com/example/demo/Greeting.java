package com.example.demo;

import java.util.Optional;

public class Greeting {
	public String name;
	public String greeting;

	public Greeting() {
	}

	public Greeting(String name) {
		if (Optional.ofNullable(name).isEmpty()) {
			name = "World!";
		}
		this.name = name;
		this.greeting = "Hello " + name;
	}
}
