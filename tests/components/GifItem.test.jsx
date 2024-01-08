import { render, screen } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem';

describe('Tests on <GifItem />', () => {

    const title = 'Pedro Pascal';
    const url = 'http://pedropascal.com/pedropascal123.jpg'

    test('should match snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>);
        expect (container).toMatchSnapshot();
    });

    test('should show image with the proper url and alt', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title); 
    });   
    
    test('should show title on the component', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });  

});