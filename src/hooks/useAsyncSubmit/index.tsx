import React from "react";
import { IformObject } from "../../interfaces";

export const useAsyncSubmit = (formObj: IformObject) => {
  const [status, setStatus] = React.useState<string>("idle");
  const [apiResponse, setApiResponse] = React.useState<string | null>(null);
  const [apiError, setApiError] = React.useState<string | null>(null);

  const asyncSubmitCallback = React.useCallback(
    async (e: React.SyntheticEvent<HTMLButtonElement>) => {
      try {
        e.preventDefault();

        setStatus("pending");

        const response = await fetch(
          "https://61e036950f3bdb0017934eb0.mockapi.io/api/valid-passwords/resultss",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formObj),
          }
        );

        if (response.ok) {
          setStatus("success");
          setApiResponse("Information sent!");
        } else {
          throw new Error("Something went wrong");
        }
      } catch (err) {
        console.warn(err);
        setStatus("error");
        setApiError("Failed to send your information!");
      }
    },
    [formObj]
  );

  return { asyncSubmitCallback, status, apiResponse, apiError };
};
