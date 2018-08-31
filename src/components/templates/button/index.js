import React from 'react';
import styled, { css } from 'styled-components';

import { colors,font, borderRadius, gutter } from '../../../assets/style/variables';

const btnPadding = '20px';

const Template = styled.button`
  display: inline-block;
  padding: 8px ${btnPadding};
  border-radius: ${borderRadius.default};
  font-size: 14px;
  text-align: center;
  min-width: 80px;
  border: 0px;
  margin-right: ${gutter.small};
  &:hover{
    cursor: pointer;
  }
  &:focus{
    outline: none;
  }
  &:last-child{
    margin-right: 0px;
  }
`;

const ButtonTemplate = Template.extend`
  background-color: ${font.color.default};
  color: ${colors.white};

  ${props => props.primary && css`
    background-color: ${colors.primary.default};
  `}

  ${props => props.second && css`
    background-color: ${colors.second.default};
  `}

  ${props => props.info && css`
    background-color: ${colors.info.default};
  `}

  ${props => props.success && css`
    background-color: ${colors.success.default};
  `}
  
  ${props => props.danger && css`
    background-color: ${colors.danger.default};
  `}

  ${props => props.disabled === true && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

const Button = props => (
  <ButtonTemplate
    type={props.type ? props.type : 'button'}
    size={props.size}
    onClick={props.onClick}
    {...props}
  >
    {props.children}
  </ButtonTemplate>
);

export { Button };