import {shallow} from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en RealExampleRef', () => {

    const wrapper = shallow(<RealExampleRef />);
    
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });
    
    test('debe mostrar el componente <MultipleCustomHooks />', () => {
        wrapper.find('button').simulate('click');
        // console.log(wrapper.html())
        // expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
    
    
})
