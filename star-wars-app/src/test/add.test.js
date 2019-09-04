import Add from '../components/add';
describe('<Add /> rendering', () => {
    it('should render one <h1>', () => {
        let wrapper = shallow(<Add />);
        expect(wrapper.children('h1')).toHaveLength(1);
    });
});