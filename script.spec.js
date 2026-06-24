import {add, subtract, multiply, divide} from "./script.js";


describe("add", () => {
    test("positive numbers", () =>{
        expect(add(2, 5)).toBe(5);
    });

    test("negative numbers", () =>{
        expect(add(-4, -6)).toBe(-10);
    });

    test("mixed numbers", () =>{
        expect(add(-2, 7)).toBe(5);
    });
});