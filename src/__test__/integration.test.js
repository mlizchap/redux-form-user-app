import React from 'react';
import { mount } from 'enzyme';
import { storeFactory } from '../testUtils';
import UserList from '../components/UserList/UserList';
import App from '../components/App/App';
import UserForm from '../components/UserForm/UserForm';
import { Provider } from 'react-redux';

const newUser = { 
    username: 'jane2', 
    email: 'test@test.com2', 
    favMovie: 'Toy Story2', 
    favBook: 'Harry Potter2'
}
const expectedNewUser = {...newUser, id: 1}

it('when action is dispatched, store is updated', () => {
    const store = storeFactory();
    store.dispatch({type: 'CREATE_USER', payload: newUser});
    const state = store.getState();
    expect(state.users[0]).toEqual(expectedNewUser);
});
it('when state is updated, a new user component is created', () => {
    const store = storeFactory();
    store.dispatch({type: 'CREATE_USER', payload: newUser});
    const wrapper = mount(<UserList store={store} />);
    const userComponents = wrapper.find('.component-user');
    expect(userComponents.length).toBe(1);
});
it('the items in the user component matches the items the user entered', () => {
    const store = storeFactory();
    store.dispatch({type: 'CREATE_USER', payload: newUser});
    const wrapper = mount(<UserList store={store} />);

    const username = wrapper.find('.component-user__username');
    const email = wrapper.find('.component-user__email');
    const favMovie = wrapper.find('.component-user__favMovie');
    const favBook = wrapper.find('.component-user__favBook');

    console.log(favMovie.debug())

    expect(newUser.username).toBe(username.text());
    expect( newUser.email).toBe(email.text());
    expect(newUser.favMovie).toBe(favMovie.text());
    expect(newUser.favBook).toBe(favBook.text());
})