"use strict";

"use strict";
require("should");

const folds = require("../learnhaskell/folds");

describe("fold left", function () {

  it("should give the same result as a sum to reduce", () => {
     const a = [1,2,3,34,4,5];
     const one = a.reduce((sum, i) => {
        return sum + i;
     }, 0)
     const two = folds.foldl(a, (sum, i) => {
        return sum + i;
     }, 0);
     one.should.eql(two);
  });
  
  it("should give the same result as a sum to reduce", () => {
     const a = [1,2,3,34,4,5];
     const one = a.reduce((sum, i) => {
        return sum + i;
     }, 0)
     const two = folds.foldlForEach(a, (sum, i) => {
        return sum + i;
     }, 0);
     one.should.eql(two);
  });

  it("should give the same result as a map", () => {
     const a = [1,2,3,34,4,5];
     const one = a.reduce((list, i) => {
        return list.concat(i);
     }, [])
     const two = folds.foldl(a, (list, i) => {
        return list.concat(i);
     }, []);
     one.should.eql(two);
  });

});


describe("fold right", function () {

  it("should give the same result as a sum to reduce", () => {
     const a = [1,2,3,34,4,5];
     const one = a.reduce((sum, i) => {
        return sum + i;
     }, 0)
     const two = folds.foldr(a, (i, sum) => {
        return sum + i;
     }, 0);
     one.should.eql(two);
  });
  
  it("should give the same result as a sum to reduce (for each)", () => {
     const a = [1,2,3,34,4,5];
     const one = a.reduce((sum, i) => {
        return sum + i;
     }, 0)
     const two = folds.foldrForEach(a, (i, sum) => {
        return sum + i;
     }, 0);
     one.should.eql(two);
  });

  it("should give the same result as a reverse map", () => {
     const a = [1,2,3,34,4,5];
     const one = a.reduce((list, i) => {
        return list.concat(i);
     }, [])
     const two = folds.foldr(a, (i, list) => {
        return list.concat(i);
     }, []);
     one.reverse().should.eql(two);
  });

  it("should give the same result as a reverse map (for each)", () => {
     const a = [1,2,3,34,4,5];
     const one = a.reduce((list, i) => {
        return list.concat(i);
     }, [])
     const two = folds.foldrForEach(a, (i, list) => {
        return list.concat(i);
     }, []);
     one.reverse().should.eql(two);
  });

});
