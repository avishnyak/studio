Studio.js
========

<img src="http://onstagejs.com/studio/images/STUDIO_logo.png" align="right" width="300px" />

Micro-services using actors model framework for JavaScript.

Studio is a lightweight framework for node (it also runs on major browsers, but the priority is node projects) developed to make easy to create reactive applications according to [reactive manifesto](http://www.reactivemanifesto.org/) principles. It uses an actor model (freely inspired by akka actors) implemented using [baconjs](https://github.com/baconjs/bacon.js) for reactive programming and [Q](https://github.com/kriskowal/q) a+ promises to solve the callback hell problem.

The main goal is to make all systems response, fault tolerant, scalable and mantainable. The development with Studio is (and always will be) as easy as possible, i'll keep a concise api, so other developers can create (and share) plugins for the framework.

Studio isn't only a library, it's a framework. It's really important to learn how to program and not only what each method can do.

I would love to receive feedback.Let me know if you've used it. What worked and what is wrong. Contribute and spread the word.


[![Build Status](https://travis-ci.org/onstagejs/studio.svg?branch=master)](https://travis-ci.org/onstagejs/studio)
[![npm version](https://badge.fury.io/js/studio.svg)](http://badge.fury.io/js/studio)
[![Dependency Status](https://david-dm.org/onstagejs/studio.svg)](https://david-dm.org/onstagejs/studio)
[![devDependency Status](https://david-dm.org/onstagejs/studio/dev-status.svg)](https://david-dm.org/onstagejs/studio#info=devDependencies)
[![Codacy Badge](https://www.codacy.com/project/badge/befaf49356ff402a830c45ee0f0ce1a0)](https://www.codacy.com/public/ericholiveira10/studio)
[![Issue Stats](http://issuestats.com/github/onstagejs/studio/badge/issue?style=flat)](http://issuestats.com/github/onstagejs/studio)
[![Issue Stats](http://issuestats.com/github/onstagejs/studio/badge/pr?style=flat)](http://issuestats.com/github/onstagejs/studio)

[![NPM](https://nodei.co/npm/studio.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/studio/)

Table of contents
========

- [Install](#install)
- [Intro](#intro)
- [API](#api)
- [Examples](#examples)
- [Pro tips](#pro-tips)
- [Dependencies](#dependencies)
- [Build](#build)
- [Test](#test)

Install
========

To install execute:

    npm install studio

Intro
========

We all want our systems to be responsive, scalable, fault tolerant, mantainable and for the last, but not least, easy and fun to develop. With this goals in mind i decided to build a [micro-services](http://martinfowler.com/articles/microservices.html) framework for nodejs using and architecture freely inspired on [actor model](http://en.wikipedia.org/wiki/Actor_model). I present you [Studio](https://github.com/onstagejs/studio)

Studio encourages you to use the best pratices of nodejs, it helps you to write simple, clean and completely decoupled code. And makes it very easy and fun.

First of all, almost everything in a Studio-based application is an [Actor](http://onstagejs.com/studio/docs/class/Actor.html).

So if you're used to build SOA or micro-services all your services (and possible layers, as DAOs for instance) are going to be declared as a STATELESS SINGLETON actor. Actors have an unique identifier and communicate (always) asynchronously through message passing. The benefits of this approach is that it is really easy to take just some of your actors to different servers and make a better use of it. Also, your actors have the free benefit of being naturally indempotent (each actor receives a COPY of the message, so one actor can't mess with the objects of another actor) increasing your code security, use [baconjs](https://github.com/baconjs/bacon.js) streams (which let you filter,map,buffer and do lots of different transformations to your messages) so you can keep your business rules apart for the validations increasing your code readability, and [Q](https://github.com/kriskowal/q) A+ promises to help you with the callback hell.

The other important class on Studio is the [Driver](http://onstagejs.com/studio/docs/class/Driver.html).

A driver takes your endpoint input and parses it in a message for a certain actor.

And this is it... this is all you need to create [reactive](http://reactivemanifesto.org) applications.


API
========

The API documentation can be accessed on [Docs](http://onstagejs.com/studio/docs/)

Examples
========

Pro tips
========

Dependencies
========
Studio depends on:
- [baconjs](https://github.com/baconjs/bacon.js) for stream manipulation
- [Q](https://github.com/kriskowal/q) for a+ promises usage
- [csextends](https://github.com/bevry/csextends) to make coffee classes extensible via javascript

Build
========

To build the project you have to run:

    grunt

This is going to generate js files (and source-maps) on "compiled" folder and a browserified version of Studio on "dist" folder

Test
========

Run test with:

    npm test
