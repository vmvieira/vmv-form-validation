import { capitalizeFirstLetter } from "../index";

const mocks = {
  word: "capitalize",
  sentence: "capitalize just the first word",
  alreadyCapitalized: "Capitalized",
};

const throwMocks = {
  number: 42,
  array: ["bunch", "of", "random strings"],
  object: { word: "test" },
  boolean: true,
};

const getFirstLetterHelper = (str) => str.charAt(0);

test("works in a single word, sentence or strings that are already uppercase", () => {
  const word = capitalizeFirstLetter(mocks.word);
  const sentence = capitalizeFirstLetter(mocks.sentence);
  const alreadyCapitalized = capitalizeFirstLetter(mocks.alreadyCapitalized);

  const firstLetterInWord = getFirstLetterHelper(word);
  const firstLetterInSentence = getFirstLetterHelper(sentence);
  const firstLetterInAlreadyCapitalized =
    getFirstLetterHelper(alreadyCapitalized);

  expect(firstLetterInWord).toBe(firstLetterInWord.toUpperCase());
  expect(firstLetterInSentence).toBe(firstLetterInSentence.toUpperCase());
  expect(firstLetterInAlreadyCapitalized).toBe(
    firstLetterInAlreadyCapitalized.toUpperCase()
  );
});

test("errors when input isn't a string", () => {
  const number = () => capitalizeFirstLetter(throwMocks.number);
  const array = () => capitalizeFirstLetter(throwMocks.array);
  const object = () => capitalizeFirstLetter(throwMocks.object);
  const boolean = () => capitalizeFirstLetter(throwMocks.boolean);

  expect(number).toThrowError();
  expect(array).toThrowError();
  expect(object).toThrowError();
  expect(boolean).toThrowError();
});
