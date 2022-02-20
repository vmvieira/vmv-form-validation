import React from "react";

export interface IformObject {
  name: string;
  email: string;
  password: string;
}

export interface IformErrors {
  name: { hasError: boolean; errorMsgs: string[] };
  email: { hasError: boolean; errorMsgs: string[] };
  password: { hasError: boolean; errorMsgs: string[] };
}

export interface IStyleProps {
  isError?: boolean;
  isValid?: boolean;
}

export interface IInputProps {
  fieldName: string;
  fieldValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  fieldErrors: { hasError: boolean; errorMsgs: string[] };
  isDisabled: boolean;
}

export interface IButtonProps {
  handleClick: (
    event: React.SyntheticEvent<HTMLButtonElement>
  ) => Promise<void>;
  isDisabled: boolean;
}
