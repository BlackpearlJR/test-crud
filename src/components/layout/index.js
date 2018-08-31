import React, { Component } from 'react';
import styled from 'styled-components';
import { colors, gutter } from '../../assets/style/variables';

const Wrapper = styled.div`
  display: block;
  width: 100vw;
  overflow-y: hidden;
  margin: auto;
`;

const Navbar = styled.nav`
  background-color: ${colors.primary.default};
  color: ${colors.white};
  padding: ${gutter.default};
  text-align: center;
  margin-bottom: ${gutter.large};
`;

class Layout extends Component {
  state = {  }
  render() {
    return (
      <Wrapper>
        <Navbar>CRUD Test by Preeyanuch</Navbar>
        {this.props.children}
      </Wrapper>
    )
  }
}

export default Layout;