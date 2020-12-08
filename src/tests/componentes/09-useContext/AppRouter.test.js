import { shallow } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas sobre <AppRouter />', () => {

    // Debe hacerse con mount
    const wrapper = shallow(
    <UserContext.Provider value={{
        id: 1,
        name: 'Beto'
    }}>
        <AppRouter />
    </UserContext.Provider>
    );
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    

})
