import React from 'react';
import { renderHook,act } from '@testing-library/react-hooks';
import {useForm} from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Beto',
        email: 'beto@gmail.com'
    };

    test('debe regresar un formulario por defecto ', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('debe cambiar el valor del formulario (cambiar name)', () => {
        const object = {
            target:{
                name:'name',
                value: 'Jorge'
            }
        }
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;
        act(() => handleInputChange(object));
        const [values] = result.current;
        expect(values).toEqual({...initialForm, name:'Jorge'});
    });

    test('debe reestablecer el formulario con RESET', () => {
        const object = {
            target:{
                name:'name',
                value: 'Jorge'
            }
        }
        const {result} = renderHook(() => useForm(initialForm));
        
        const [, handleInputChange,reset] = result.current;
        act(() => {
            handleInputChange(object)
            reset();
        });

        const [values] = result.current;
        expect(values).toEqual(initialForm);
    })
    
    
    
});
