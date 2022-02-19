import { Input, Button } from "./components";
import { useForm, useAsyncSubmit } from "./hooks";
import * as S from "./styles";

const App = () => {
  const { formData, handleInputChange, handleSubmit, handleBlur } = useForm(
    {
      name: "",
      email: "",
      password: "",
    },
    alert
  );
  return (
    <>
      <S.GlobalStyle />
      <S.MainWrapper>
        <S.FancyHeadline>Hello, world !</S.FancyHeadline>

        <S.MainForm>
          <S.SpaceBetweenContainer>
            <S.BasicWrapper>
              <Input
                fieldName={"name"}
                fieldValue={formData.name}
                handleChange={handleInputChange}
                handleBlur={handleBlur}
                fieldMessage={"Alguma mensagem informativa aqui"}
              />
              <Input
                fieldName={"email"}
                fieldValue={formData.email}
                handleChange={handleInputChange}
                handleBlur={handleBlur}
                fieldMessage={"Alguma mensagem informativa aqui"}
              />
              <Input
                fieldName={"password"}
                fieldValue={formData.password}
                handleChange={handleInputChange}
                handleBlur={handleBlur}
                fieldMessage={"Alguma mensagem informativa aqui"}
              />
            </S.BasicWrapper>
            <Button handleClick={handleSubmit} />
          </S.SpaceBetweenContainer>
        </S.MainForm>
      </S.MainWrapper>
    </>
  );
};

export default App;
