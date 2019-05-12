Gilded Rose
===========

## Description

In the language of your choice practice good design.

Refactor the code in the [Gilded Rose kata](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/) in such a way that adding the new `conjured` functionality is easy.

------

### Resources

- Original [kata](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/)
- Original Makers [repo](https://github.com/makersacademy/course/blob/master/individual_challenges/gilded_rose.md)
- Javascript language [repo](https://github.com/guyroyse/gilded-rose-javascript)

------

## Motivation

To practice good design and refactoring good practice on a legacy code base that I am not familiar with.

------

## Current functionality & requirements

The current functionality as detailed in the original kata, and the additional requirement are included with my problem breakdown [here](https://github.com/mattTea/gilded-rose/blob/master/problem-breakdown.md)

------

## Technologies used

- JavaScript
- Jasmine testing framework
<!-- - ESLint -->
- Test coverage using Istanbul

------

## Steps to download

1. Fork this [repo](https://github.com/mattTea/gilded-rose)

2. `git clone git@github.com:<userName>/gilded-rose` onto your local machine

------

## To run tests

After forking and cloning repo,

1. Copy path of `SpecRunner.html` into your browser

2. Tests will run and output in the browser


### To run test coverage

1. Install Istanbul if not already installed, by running `npm install -g istanbul`

2. Navigate to root of project and run `istanbul cover jasmine spec/*Spec.js`

3. Test coverage stats are displayed in terminal
    - N.B. Use this only for coverage stats, tests pass/fail should be seen in the browser as per above instruction
