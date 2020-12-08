import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoApp />', () => {

    let wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<TodoApp />);
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de agregar un TODO', () => {
        // el mount usado para probar toda la aplicacion en contexto
        // const wrapper = mount( <TodoApp /> ); no funciona por ser react 17
        // act(() => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]); 
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        // })
        
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        // expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('debe eliminar un TODO', () => {
        // Añadiendo un TODO
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
       
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');

    })
    
    
})
