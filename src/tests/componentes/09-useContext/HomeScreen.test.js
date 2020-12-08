import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name:'Jorge',
        email: 'jorge@gmail.com'
    }

    // Como mi HomeScreen se le pasa un user, se debe de pasarlo mediante
    // <UserContext.Provider value = {} />

    // Se debe usar mount en lugar de shallow para que pueda renderizar el homescreen
    //y nosolo el high order component
    const wrapper = shallow(
        <UserContext.Provider value = {{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    
    );

    test('debe mostrar el componente ', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
