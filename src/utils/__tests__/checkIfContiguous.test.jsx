import { checkIfContiguous } from "../index";

const contiguousMocks = {
  singleElement: ["2"],
  multipleElements: ["3", "5", "7"],
  withDuplicates: ["2", "2", "4", "6"],
  allEqual: ["3", "3", "3", "3", "3", "3"],
};

const nonContiguousMocks = {
  multipleElements: ["3", "2", "6"],
  withDuplicates: ["4", "4", "3", "6"],
};

test("returns true when elements are contiguous", () => {
  const singleElement = checkIfContiguous(contiguousMocks.singleElement);
  const multipleElements = checkIfContiguous(contiguousMocks.multipleElements);
  const withDuplicates = checkIfContiguous(contiguousMocks.withDuplicates);
  const allEqual = checkIfContiguous(contiguousMocks.allEqual);

  expect(singleElement).toBe(true);
  expect(multipleElements).toBe(true);
  expect(withDuplicates).toBe(true);
  expect(allEqual).toBe(true);
});

test("returns false when they're not", () => {
  const multipleElements = checkIfContiguous(
    nonContiguousMocks.multipleElements
  );
  const withDuplicates = checkIfContiguous(nonContiguousMocks.withDuplicates);

  expect(multipleElements).toBe(false);
  expect(withDuplicates).toBe(false);
});
