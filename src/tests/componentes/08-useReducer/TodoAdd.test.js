import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {
    
    const handleAddTodo = jest.fn();

    const wrapper = shallow(
    <TodoAdd
        handleAddTodo = {handleAddTodo}
    />);
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('NO debe de llamar handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('debe llamar la funcion handleAddTodo', () => {
        // con un argumento | called
        const value = 'Aprender React';
        // const formSubmit = wrapper.find('form').prop('onSubmit');
        // formSubmit({ preventDefault(){} });
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        expect(handleAddTodo).toHaveBeenCalled();
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });
        // saber si el reset() se llama despues del handleAddTodo
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
})
