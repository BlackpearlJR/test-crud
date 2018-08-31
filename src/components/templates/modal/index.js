import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { colors, gutter } from '../../../assets/style/variables';

const Backdrop = styled.div`
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.3);
  z-index: 2048;
  display: none;

  ${props => props.show === true && css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

const ModalContainer = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 480px;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  padding: ${gutter.default};
`;

const ModalBody = styled.div`
  flex: 1;
`;

const Modal = props => {
  return (
    <Backdrop show={props.show}>
      <ModalContainer>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </ModalContainer>
    </Backdrop>
  );
}

export { Modal };