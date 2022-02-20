import React from "react";
import { validateEmail, validatePassword, validateName } from "../../utils";
import { IformObject, IformErrors } from "../../interfaces";

export const useForm = (initialState: IformObject) => {
  const [formData, setFormData] = React.useState(initialState);
  const [formErrors, setFormErrors] = React.useState<IformErrors>({
    name: { hasError: true, errorMsgs: [] },
    email: { hasError: true, errorMsgs: [] },
    password: { hasError: true, errorMsgs: [] },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        const nameValidation = validateName(value);

        setFormErrors((prev) => ({
          ...prev,
          [name]: {
            ...prev[name],
            hasError: nameValidation.hasError,
            errorMsgs: nameValidation.errorMsgs,
          },
        }));

        break;

      case "email":
        const emailValidation = validateEmail(value);

        setFormErrors((prev) => ({
          ...prev,
          [name]: {
            ...prev[name],
            hasError: emailValidation.hasError,
            errorMsgs: emailValidation.errorMsgs,
          },
        }));
        break;

      case "password":
        const passwordValidation = validatePassword(value);

        setFormErrors((prev) => ({
          ...prev,
          [name]: {
            ...prev[name],
            hasError: passwordValidation.hasError,
            errorMsgs: passwordValidation.errorMsgs,
          },
        }));

        break;

      default:
        break;
    }
  };

  const isDisabled = React.useMemo(() => {
    return Object.values(formErrors).some(
      (eachObj) => eachObj.hasError === true
    );
  }, [formErrors]);

  return { formData, formErrors, handleInputChange, handleBlur, isDisabled };
};
