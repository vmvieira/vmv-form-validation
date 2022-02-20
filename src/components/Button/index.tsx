import * as S from "./styles";
import { IButtonProps } from "../../interfaces";

export const Button = (props: IButtonProps) => {
  return (
    <S.StyledButton
      type="submit"
      onClick={props.handleClick}
      disabled={props.isDisabled}
    >
      Submit !
    </S.StyledButton>
  );
};
