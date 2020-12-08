import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import {demoTodos} from '../../fixtures/demoTodos';

const handleDelete = jest.fn();
const handleToggle = jest.fn();


describe('Pruebas en <TodoListItem />', () => {

    const wrapper = shallow(
        <TodoListItem 
            todo = {demoTodos[0]}
            i = {0}
            handleDelete = {handleDelete}
            handleToggle = {handleToggle}
        />
    );

    test('debe mostrarse el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la funcion handleDelete', () => {
            wrapper.find('button').simulate('click');
            expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe de llamar la funcion handleToggle', () => {
            wrapper.find('p').simulate('click');
            expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id); 
    });
    
    test('debe de mostrar el texto correctamente', () => {
            const p = wrapper.find('p').text();
            expect(p).toBe('1. Aprender React');
    });

    test('debe de tener la clase complete si el TODO.done = true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
                todo = {demoTodos[0]}
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    })
    
    // PASAR A NOTION el jest.fn() y el toHaveBeenCalledWith de AddCategory para explicar mas
    
})
