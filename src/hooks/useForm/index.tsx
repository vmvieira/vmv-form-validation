import React from "react";
import { validateEmail, validatePassword, validateName } from "../../utils";

export const useForm = (initialState: any, onSubmit: any) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleInputChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onSubmit?.(JSON.stringify(formData, null, 2));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    console.log("event name", name);
    console.log("event value", value);

    switch (name) {
      case "name":
        const nameValidation = validateName(value);

        console.log("hasError", nameValidation.hasError);
        console.log("errorMsg", nameValidation.errorMsg);

        break;

      case "email":
        const emailValidation = validateEmail(value);

        console.log("hasError", emailValidation.hasError);
        console.log("errorMsg", emailValidation.errorMsg);
        break;

      case "password":
        console.log("value", value);
        break;

      default:
        break;
    }
  };

  return { formData, handleInputChange, handleSubmit, handleBlur };
};
