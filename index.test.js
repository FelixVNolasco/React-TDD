const fizzBuzz = require("./index");
describe("fizzBuzz()", () => {
  it('returns "FizzBuzz" for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });
  it("returns the given number for multiples of neither 3 nor 5", () => {
    expect(fizzBuzz(1)).toBe("1");
    expect(fizzBuzz(22)).toBe("22");
  });
  it("return 'Fizz' form multiples of 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  it("return 'Buzz' form multiples of 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
  });
});
