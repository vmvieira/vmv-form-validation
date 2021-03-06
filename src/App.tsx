import { Input, Button } from "./components";
import { useForm, useAsyncSubmit } from "./hooks";
import * as S from "./styles";

const App = () => {
  const { formData, formErrors, handleInputChange, handleBlur, isDisabled } =
    useForm({
      name: "",
      email: "",
      password: "",
    });

  const { asyncSubmitCallback, status, apiResponse, apiError } =
    useAsyncSubmit(formData);

  return (
    <>
      <S.GlobalStyle />
      <S.MainWrapper>
        <S.BasicWrapper>
          <S.FancyHeadline>Hello, world !</S.FancyHeadline>
          {status === "pending" && <S.LoadingSpinner />}
          {(status === "error" || status === "success") && (
            <S.FancyHeadline
              isError={status === "error"}
              isSuccess={status === "success"}
            >
              {apiResponse || apiError}
            </S.FancyHeadline>
          )}
        </S.BasicWrapper>
        <S.MainForm>
          <S.SpaceBetweenContainer>
            <S.BasicWrapper>
              <Input
                fieldName={"name"}
                fieldValue={formData.name}
                handleChange={handleInputChange}
                handleBlur={handleBlur}
                fieldErrors={formErrors.name}
                isDisabled={status === "pending"}
              />
              <Input
                fieldName={"email"}
                fieldValue={formData.email}
                handleChange={handleInputChange}
                handleBlur={handleBlur}
                fieldErrors={formErrors.email}
                isDisabled={status === "pending"}
              />
              <Input
                fieldName={"password"}
                fieldValue={formData.password}
                handleChange={handleInputChange}
                handleBlur={handleBlur}
                fieldErrors={formErrors.password}
                isDisabled={status === "pending"}
              />
            </S.BasicWrapper>
            <Button
              handleClick={asyncSubmitCallback}
              isDisabled={isDisabled || status === "pending"}
              btnText={status === "pending" ? "Loading..." : "Submit!"}
            />
          </S.SpaceBetweenContainer>
        </S.MainForm>
      </S.MainWrapper>
    </>
  );
};

export default App;
