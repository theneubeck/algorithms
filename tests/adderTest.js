"use strict";
require("should");

const adder = require("../learnhaskell/adder");
const apply = require("../learnhaskell/apply");

describe("Curried adder", () => {
  it("should add a number", () => {
    adder(1)().should.eql(1);
  });

  it("should add two numbers", () => {
    adder(1)(2)().should.eql(3);
  });

  it("should add three numbers", () => {
    adder(1)(2)(3)().should.eql(6);
  });

  it("should add four numbers", () => {
    adder(1)(2)(3)(4)().should.eql(10);
  });
});

describe("Apply an adder", () => {
  it("should add a number", () => {
    apply(adder, 1).should.eql(1);
  });

  it("should add two numbers", () => {
    apply(adder, 1, 2).should.eql(3);
  });

  it("should add three numbers", () => {
    apply(adder, 1, 2, 3).should.eql(6);
  });

  it("should add four numbers", () => {
    apply(adder, 1, 2, 3, 4).should.eql(10);
  });
});
