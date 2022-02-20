import { checkForAdjacentDuplicates } from "../index";

const adjacentMocks = {
  multipleElements: ["2", "3", "3", "8"],
  allEqual: ["3", "3", "3", "3", "3", "3"],
};

const nonAdjacentMocks = {
  multipleElements: ["3", "5", "6"],
  nonAdjacentDuplicates: ["4", "5", "4", "6"],
};

test("returns true when array has elements that are adjacent duplicates", () => {
  const multipleElements = checkForAdjacentDuplicates(
    adjacentMocks.multipleElements
  );

  const allEqual = checkForAdjacentDuplicates(adjacentMocks.allEqual);

  expect(multipleElements).toBe(true);
  expect(allEqual).toBe(true);
});

test("returns false when they're not", () => {
  const multipleElements = checkForAdjacentDuplicates(
    nonAdjacentMocks.multipleElements
  );
  const nonAdjacentDuplicates = checkForAdjacentDuplicates(
    nonAdjacentMocks.nonAdjacentDuplicates
  );

  expect(multipleElements).toBe(false);
  expect(nonAdjacentDuplicates).toBe(false);
});
