export const capitalizeFirstLetter = (str: string) => {
  try {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } catch (err) {
    throw new Error("ops, something went wrong");
  }
};

export const checkForAdjacentDuplicates = (value: string[]) => {
  try {
    return value.some((currentValue, index, arr) => {
      return currentValue === arr[index - 1];
    });
  } catch (err) {
    console.warn(err);
  }
};

export const checkIfContiguous = (value: string[]) => {
  try {
    return value.every((currentValue, index, arr) => {
      if (index === 0) return true;
      const currentNumber = parseInt(currentValue);
      const previousNumber = parseInt(arr[index - 1]);
      return currentNumber >= previousNumber;
    });
  } catch (err) {
    console.warn(err);
  }
};

export const validateName = (fieldValue: string) => {
  let hasError,
    errorMsgs: string[] = [];

  hasError = false;

  if (fieldValue.length === 0) {
    hasError = true;
    errorMsgs.push("Name is required.");
  }
  return { hasError, errorMsgs };
};

export const validateEmail = (fieldValue: string) => {
  let hasError,
    errorMsgs: string[] = [];

  hasError = false;

  const isValid = String(fieldValue)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (!isValid) {
    hasError = true;
    errorMsgs.push("Invalid e-mail.");
  }

  return { hasError, errorMsgs };
};

export const validatePassword = (fieldValue: string) => {
  let hasError,
    errorMsgs: string[] = [];

  const numberValue = parseInt(fieldValue);
  const arrFromStr = fieldValue.split("");

  hasError = false;

  if (fieldValue.length !== 6) {
    hasError = true;
    errorMsgs.push("Password must have six digits.");
  }

  if (fieldValue.length !== 6 || numberValue < 184759 || numberValue > 856920) {
    hasError = true;
    errorMsgs.push("Password must be between 184759 and 856920.");
  }

  if (arrFromStr.length === 0 || !checkForAdjacentDuplicates(arrFromStr)) {
    hasError = true;
    errorMsgs.push("Password must have two equal adjacent elements.");
  }

  if (arrFromStr.length === 0 || !checkIfContiguous(arrFromStr)) {
    hasError = true;
    errorMsgs.push("Password's numbers must be contiguous from left to right.");
  }

  return { hasError, errorMsgs };
};
