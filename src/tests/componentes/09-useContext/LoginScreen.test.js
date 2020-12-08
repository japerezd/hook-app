import { mount, shallow } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas sobre <LoginScreen />', () => {
    
    const setUser = jest.fn();
    
    // Debe hacerse con mount
    const wrapper = shallow(
        <UserContext.Provider value = { { setUser } } >

            <LoginScreen />
        </UserContext.Provider>
    );
    test('debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('debe ejecutarse el setUser con el argumento esperado', () => {
        // wrapper.find('button').simulate('click'); se puede hacer con esto tambien
        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({
            name: 'Beto',
            email: 'beto@gmail.com'
        });

    });
    
    
});
