# Benchmarks

Este repositorio contiene las pruebas de rendimiento de los siguientes frameworks y lenguajes:

## Java

- SpringBoot
- Playframework
- Micronaut
- Quarkus

## Python

- Django
- Flask

## JavaScript

- Nodejs
- Express
- Fastify
- Vanilla Javascript

## Php

- Laravel
- Lumen
- Codeigniter
- Symfony
- Vanilla Php

## Tests

- Velocidad en las pruebas
- Tiempo de ejecución
- Primer Request

```bash
node install request
node time.js PATH_TO_JAR
```

- Concurrencia - Solicitudes por segundo

```bash
ab -k -c 20 -n 10000 http://localhost:8080/hello
```

- Memoria usada

```bash
ps x -o rss,vsz,command | grep java
```

> Esta basado en la comparación de Graeme Rocher: <https://www.youtube.com/watch?v=rJFgdFIs_k8&feature=youtu.be>
