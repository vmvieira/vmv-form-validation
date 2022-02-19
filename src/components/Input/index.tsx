import * as S from "./styles";

export const Input = (props: any) => {
  return (
    <S.InputContainer>
      <S.LabelText htmlFor={props.fieldId}>{props.fieldName}</S.LabelText>
      <S.StyledInput
        type="text"
        name={props.fieldName}
        id={props.fieldId}
        value={props.fieldValue}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
      />
      <S.FieldMessage>{props.fieldMessage}</S.FieldMessage>
    </S.InputContainer>
  );
};
