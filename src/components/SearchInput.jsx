import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = () => {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <ContainerInput>
      <Input
        type="text"
        placeholder="Search"
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        inputFocus={inputFocus}
      />
      <SearchIcon
        width="20px"
        height="20px"
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fillRule="evenodd"></path>
      </SearchIcon>
    </ContainerInput>
  );
};

// Styled components
const ContainerInput = styled.div`
  position: relative;
  width: max-content;
`;

const Input = styled.input`
  width: ${({ inputFocus }) => (inputFocus ? '250px' : '150px')};
  padding: 5px 0px 5px 40px;
  border-radius: 9999px;
  border: solid 1px #333;
  transition: all 0.3s ease-in-out;
  outline: none;
  opacity: ${({ inputFocus }) => (inputFocus ? 1 : 0.8)};
`;

const SearchIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
`;

export default SearchInput;
