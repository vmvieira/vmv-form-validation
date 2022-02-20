import * as S from "./styles";
import { IInputProps } from "../../interfaces";
import { capitalizeFirstLetter } from "../../utils";

export const Input = (props: IInputProps) => {
  return (
    <S.InputContainer>
      <S.LabelText htmlFor={props.fieldName}>
        {capitalizeFirstLetter(props.fieldName)}
      </S.LabelText>
      <S.StyledInput
        type="text"
        name={props.fieldName}
        id={props.fieldName}
        value={props.fieldValue}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        disabled={props.isDisabled}
      />
      {props.fieldErrors.errorMsgs.length > 0 &&
        props.fieldErrors.errorMsgs.map((eachErr: string) => (
          <S.FieldMessage key={eachErr} isError>
            {eachErr}
          </S.FieldMessage>
        ))}

      {!props.fieldErrors.hasError && (
        <S.FieldMessage isSuccess>Looks good to me !</S.FieldMessage>
      )}
    </S.InputContainer>
  );
};
