import styled, { createGlobalStyle, css } from 'styled-components';
import { reboot } from 'styled-reboot';

export const GlobalStyle = createGlobalStyle`
  ${reboot}
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme.headerBg};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 1rem;
  box-shadow: 0 0 5px 0 ${(props) => props.theme.shadowColor};
`;
export const HeaderMenu = styled.nav`
  align-items: center;
  justify-content: space-between;
  display: flex;
`;
export const HeaderItem = styled.div`
  padding: 0 1rem 0 0;
  &:last-child {
    padding: 0;
  }
`;

export const ContentMain = styled.main`
  margin-top: 3rem;
  padding: 1rem;
`;
export const ContentTitle = styled.h2`
  margin: 0.5rem 0 1rem 0;
  text-align: center;
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
`;
export const CardItem = styled.article`
  display: grid;
  grid-template-rows: max-content 15rem 1fr max-content;

  border-radius: 5px;
  background-color: ${(props) => props.theme.headerBg};
  box-shadow: 0 0 5px 0 ${(props) => props.theme.shadowColor};

  & > * {
    padding: 1rem;
  }

  & > img {
    padding: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  & > footer {
    padding-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: middle;
  }
`;

export const FormCardItem = styled(CardItem)`
  grid-column: span 2;
  grid-template-rows: max-content auto;
  padding: 1rem;

  & > * {
    padding: 0;
  }

  header {
    margin-bottom: 1rem;
  }

  form {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto max-content;
  }

  footer {
    grid-column: span 2;
    justify-self: end;
  }

  label {
    display: flex;
    width: 100%;

    span {
      width: 1.5rem;
    }
  }
`;

const sharedField = css`
  border-radius: 5px;
  background-color: white;
  border: solid 2px ${(props) => props.theme.buttonBorderColor};
  padding: 0.2rem 0.5rem;
  height: 2.5rem;
  width: calc(100% - 1.5rem);

  &:hover {
    background-color: #19c9ff;
  }

  &:active {
    background-color: #00c4ff;
  }
`;
export const Input = styled.input`
  ${sharedField}
`;
export const Select = styled.select`
  ${sharedField}
`;
export const TextArea = styled.textarea`
  ${sharedField}
  height: 5rem;
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: white;
  border: solid 2px ${(props) => props.theme.buttonBorderColor};
  margin-left: 1rem;

  &:hover {
    background-color: #0093bf;

    &:disabled {
      background-color: white;
    }
  }

  &:active {
    background-color: #006280;
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  max-width: 100%;
  margin-left: 1.5rem;
`;

export const ImageGridItem = styled.picture<{ selected: boolean }>`
  & > img {
    cursor: pointer;
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-height: 4rem;
    border: solid ${(props) => (props.selected ? '2px' : '0')}
      ${(props) => props.theme.buttonBorderColor};
  }
`;
