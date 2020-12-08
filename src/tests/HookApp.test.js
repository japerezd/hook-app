import React from 'react';
import { shallow } from 'enzyme';
import {HookApp} from '../HookApp';
import '../setupTests';


describe('Pruebas sobre el componente <HookApp />', () => {
    
    test('debe de hacer snapshot del componente', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
    

});
