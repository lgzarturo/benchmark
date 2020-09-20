name := """playframework-example"""
organization := "com.alg"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

PlayKeys.devSettings += "play.server.http.port" -> "9001"

scalaVersion := "2.13.3"

libraryDependencies += guice
