import * as S from "./styles";

export const Button = (props: any) => {
  return (
    <S.StyledButton type="submit" onClick={props.handleClick}>
      Submit !
    </S.StyledButton>
  );
};
