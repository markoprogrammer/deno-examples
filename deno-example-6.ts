import {
    assertEquals,
    assertArrayContains,
  } from "https://deno.land/std@0.67.0/testing/asserts.ts";
  
  Deno.test("hello world", () => {
    const x = 1 + 2;
    assertEquals(x, 4);
    assertArrayContains([1, 2, 3, 4, 5, 6], [3], "Expected 3 to be in the array");
  });