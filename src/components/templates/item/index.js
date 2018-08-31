import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Swal from 'sweetalert2';
import { Button } from '../button';
import { Input } from '../input';
import 'sweetalert2/src/sweetalert2.scss'

import { gutter, colors } from '../../../assets/style/variables';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  ${props => props.header && css`
    background-color: ${colors.gray.dark};
    // color: #fff;
  `}

  ${props => props.hidden === true && css`
    display: none;
  `}
`;

const Column = styled.div`
  flex: 1;
  padding: ${gutter.small}
  display: flex;
  align-items: center;
`;


class Item extends Component {
  state = {
    editItems: [],
    editAble: [],
  }

  static getDerivedStateFromProps(props, state) {
    let setState = {};
    if (!state.cancle) {
      Object.assign(setState, { reset: false })
    }
    if (state.reset && state.reset) {
      Object.assign(setState, { cancle: false, editItems: state.editItems.filter(item => item.id !== state.cancle) })
    }
    return setState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.cancle || prevState.cancle === 0) {
      this.setState({
        reset: true,
      });
    }
  }

  handleChange(e, rowId) {
    const key = e.target.name;
    const value = e.target.value;
    const editItems = this.state.editItems;

    const filter = editItems ? editItems.filter(item => item.id === rowId) : [];

    let returnData = [];
    if (filter.length > 0) {
      let editItem = {};
      const fine = editItems ? editItems.filter(item => item.id !== rowId) : [];
      Object.assign(editItem, filter[0], { [key]: value });
      returnData = [...fine, editItem];
    } else {
      returnData = [...editItems, { id: rowId, [key]: value }];
    }

    this.setState({
      editItems: returnData
    })
  }

  handleCancleEditItem(id) {
    const filter = this.state.editAble ? this.state.editAble.filter(item => item !== id) : [];
    this.setState({ cancle: id, editAble: filter });
  }

  handleSubmit(id) {
    const editItems = this.state.editItems;

    const filter = editItems ? editItems.find(item => item.id === id) : [];

    if (filter) {
      if (id !== 0 && filter.name && filter.age && filter.nickname) {
        const formData = { name: filter.name, age: filter.age, nickname: filter.nickname };
        this.props.submit(formData);
        this.handleCancleEditItem(id);
      } else {
        this.props.submit(filter);
        this.handleCancleEditItem(id);
      }
    }
  }

  handleEnableEdit(id) {
    this.setState({ editAble: [...this.state.editAble, id] })
  }

  render() {
    const { data, itemType, edit } = this.props;
    console.log('state ==>', this.state);
    const editAble = this.state.editAble;

    console.log('this.props ==>', this.props);
    return (
      <div>
        {itemType !== 'create' &&
          <Row header>
            {/* <Column>ID</Column> */}
            <Column>Name</Column>
            <Column>Age</Column>
            <Column>Nickname</Column>
            <Column>Actions</Column> 
          </Row>
        }
        {itemType !== 'create' ?
          data && data.map((item, k) => {
            let buttonGroup;
            const ed = this.state.editItems && this.state.editItems.find(k => k.id === item.id);
            const name = ed && ed.name ? ed.name : item.name;
            const age = ed && ed.age ? ed.age : item.age;
            const nickname = ed && ed.nickname ? ed.nickname : item.nickname;
            if (editAble && editAble.find(a => a === item.id)) {
              buttonGroup =
                <Column>
                  <Button success onClick={() => this.handleSubmit(item.id)}>Save</Button>
                  <Button onClick={() => this.handleCancleEditItem(item.id)}>Cancle</Button>
                </Column>
            } else {
              buttonGroup =
                <Column>
                  <Button primary onClick={() => this.handleEnableEdit(item.id)} >Edit</Button>
                  <Button danger onClick={() => this.props.removeItem(item.id)}>Delete</Button>
                </Column>
            }

            return (
              <Row key={k} {...this.props}>
                {/* <Column>{item.id}</Column> */}
                <Column>
                  <Input
                    type="text"
                    name="name"
                    placeholder="name"
                    defaultValue={item.name}
                    readOnly={editAble && editAble.find(a => a === item.id) ? false : true}
                    value={this.state.cancle === item.id ? item.name : name}
                    onChange={e => this.handleChange(e, item.id)}
                  />
                </Column>
                <Column>
                  <Input
                    type="number"
                    name="age"
                    placeholder="number only"
                    defaultValue={item.age}
                    readOnly={editAble && editAble.find(a => a === item.id) ? false : true}
                    value={this.state.cancle === item.id ? item.age : age}
                    onChange={e => this.handleChange(e, item.id)}
                  />
                </Column>
                <Column>
                  <Input
                    type="text"
                    name="nickname"
                    placeholder="nickname"
                    defaultValue={item.nickname}
                    readOnly={editAble && editAble.find(a => a === item.id) ? false : true}
                    value={this.state.cancle === item.id ? item.nickname : nickname}
                    onChange={e => this.handleChange(e, item.id)}
                  />
                </Column>
                {buttonGroup}
              </Row>
            )
          })
          :
          <Row hidden={this.props.hidden} {...this.props}>
            {/* <Column></Column> */}
            <Column>
              <Input
                type="text"
                name="name"
                placeholder="name"
                value={this.state.cancle === 0 ? '' : this.state.editItems.name && this.state.editItems[0].name}
                onChange={e => this.handleChange(e, 0)}
              />
            </Column>
            <Column>
              <Input
                type="number"
                name="age"
                placeholder="number only"
                min="0"
                max="120"
                value={this.state.cancle === 0 ? '' : this.state.editItems.age && this.state.editItems[0].age}
                onChange={e => this.handleChange(e, 0)}
              />
            </Column>
            <Column>
              <Input
                type="text"
                name="nickname"
                placeholder="nickname"
                value={this.state.cancle === 0 ? '' : this.state.editItems.nickname && this.state.editItems[0].nickname}
                onChange={e => this.handleChange(e, 0)}
              />
            </Column>
            <Column>
              <Button success onClick={() => this.handleSubmit(0)}>Save</Button>
              <Button onClick={() => this.handleCancleEditItem(0)}>Cancle</Button>
            </Column>
          </Row>
        }
      </div>
    )
  }
}

export default Item;