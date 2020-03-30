import { HelloWorld } from "../src/main";

describe("HelloWorld", () => {
  it("returns hello world", () => {
    expect(HelloWorld()).toEqual("hello, world");
  });
});
