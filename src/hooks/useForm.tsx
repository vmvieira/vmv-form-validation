import React from "react";

export const useForm = (initialState: any, onSubmit: any) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleInputChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit?.(formData);
  };

  return { formData, handleInputChange, handleSubmit };
};
