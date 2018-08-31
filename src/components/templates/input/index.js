import React from 'react';
import styled, { css } from 'styled-components';
import { colors, gutter, border } from '../../../assets/style/variables';

const Input = styled.input`
  display: block;
  width: 100%;
  padding: ${gutter.small} ${gutter.default};
  border: ${border};
  ${props => props.readOnly === true && css`
    border: none;
    cursor: default;
    &::placeholder{
      color: transparent;
    }
  `}
  ${props => props.disabled === true && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: ${gutter.small};
`;


const Group = styled.label`
  display: block;
`;



const InputGroup = props => (
  <Group>
    <InputLabel>{props.label}</InputLabel>
    <Input onChange={(e) => props.onChange(e)} />
  </Group>
);

export { Input, InputGroup };