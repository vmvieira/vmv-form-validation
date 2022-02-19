export const validateName = (fieldValue: string) => {
  let hasError, errorMsg;

  hasError = false;
  errorMsg = "Nice name!";

  if (fieldValue.length === 0) {
    hasError = true;
    errorMsg = "Name is required.";
  }
  return { hasError, errorMsg };
};

export const validateEmail = (fieldValue: string) => {
  let hasError, errorMsg;

  hasError = false;
  errorMsg = "Looks good to me!";

  const isValid = String(fieldValue)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (!isValid) {
    hasError = true;
    errorMsg = "Invalid e-mail.";
  }

  return { hasError, errorMsg };
};

export const validatePassword = (fieldValue: string) => {};
