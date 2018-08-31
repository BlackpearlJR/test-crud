import React, { Component } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Item from '../templates/item';
import { Button } from '../templates/button';
import 'sweetalert2/src/sweetalert2.scss';

import { colors, gutter } from '../../assets/style/variables';

const Container = styled.div`
  display: block;
  width: 100vw;
  // height: 100vh;
  overflow-x: hidden;
`;
const Content = styled.div`
  // flex-grow: 1;
  overflow-y: auto;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  // background-color: #fff;
`;
const Footer = styled.div`
  // background-color: ${colors.gray.dark};
  padding: ${gutter.default};
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  flex: 1;
`;

const BlankItem = styled.div`
  background-color: ${colors.gray.dark};
  padding: ${gutter.large};
  text-align: center;
`;


class Home extends Component {
  state = {
    showCreate: false
  }

  handleAddUser(data) {
    console.log('handleAddUser', data)
  }

  handleEdit(id) {
    this.setState({ editId: id });
  }

  showCreate() {
    console.log('showCreate')
    this.setState({ showCreate: !this.state.showCreate });
  }

  handleSubmit(data) {
    if (data) {
      const users = this.props.users ? this.props.users : [];
      const inArray = users ? users.find(item => item.id === data.id) : [];
      if (inArray) {
        this.props.editUser(data)
      } else {
        this.props.createUser(data)
      }
    }
  }

  removeItem(id) {
    if (id) {
      Swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this data!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.props.deleteUser(id);
          Swal(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        }
      })
    }
  }

  render() {
    return (
      <Container>
        <Content>
          {this.props.users ? 
            <Item
              itemType="edit"
              data={this.props.users ? this.props.users : []}
              removeItem={id => this.removeItem(id)}
              submit={item => this.handleSubmit(item)}
            />
            :
            <BlankItem>No Data, Please Add</BlankItem>
          }
          <Item hidden={!this.state.showCreate} itemType="create" submit={item => this.handleSubmit(item)} style={{ marginTop: '2rem' }} />
        </Content>
        <Footer>
          <Button success onClick={() => this.showCreate()}>{this.state.showCreate ? 'Success' : 'Add'}</Button>
        </Footer>
      </Container>
    )
  }
}

export default Home;