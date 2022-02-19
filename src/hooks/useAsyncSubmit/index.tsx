import React from "react";

export const useAsyncSubmit = (asyncFunction: any) => {
  const [status, setStatus] = React.useState("idle");
  const [apiResponse, setApiResponse] = React.useState(null);
  const [apiError, setApiError] = React.useState(null);

  const asyncSubmit = React.useCallback(() => {
    setStatus("pending");
    setApiResponse(null);
    setApiError(null);
    return asyncFunction()
      .then((response: any) => {
        setApiResponse(response);
        setStatus("success");
      })
      .catch((err: any) => {
        setApiError(err);
        setStatus("error");
      });
  }, [asyncFunction]);

  return { asyncSubmit, status, apiResponse, apiError };
};
