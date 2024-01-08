import { render, screen, fireEvent } from "@testing-library/react";
import {AddCategory} from '../../src/components/AddCategory';

describe('Tests on <AddCategory />', () => {

    const inputValue = 'PedroPascal';
    
    test('should change text-box value',() => {
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input,{target:{value: inputValue}});
        
        expect(input.value).toBe('PedroPascal');
    });

    test('should call onNewCategory if input has value',() => {
        const onNewCategoryMock = jest.fn();
        
        render(<AddCategory onNewCategory={onNewCategoryMock}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{target:{value: inputValue}});
        fireEvent.submit(form);
        
        expect(input.value).toBe('');
        expect(onNewCategoryMock).toHaveBeenCalledTimes(1);
        expect(onNewCategoryMock).toHaveBeenCalledWith(inputValue);
    })

    test('should NOT call onNewCategory if input is empty',() => {
        const onNewCategoryMock = jest.fn();
        render(<AddCategory onNewCategory={onNewCategoryMock}/>);
        const form = screen.getByRole('form');

        fireEvent.submit(form);
        
        expect(onNewCategoryMock).not.toHaveBeenCalled();
    })
})      