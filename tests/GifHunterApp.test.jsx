import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import {GifHunterApp} from '../src/GifHunterApp';

describe('Tests on <GifHunterApp/>', () => {

    const inputValue = 'PedroPascal';
    const findNewGif = (value) => {
        const input = screen.getByRole("textbox");
        const form = screen.getByRole('form');

        fireEvent.input(input,{target:{value: value}});
        fireEvent.submit(form);};

    test('Should start with two categories loaded',()=> {
        render(<GifHunterApp/>);

        expect(screen.getAllByRole("heading",{level: 3}).length).toBe(2);
    })

    test('Should increment category length when adding new category', ()=> {
        render(<GifHunterApp/>);
        findNewGif(inputValue);
        
        expect(screen.getAllByRole("heading", {level: 3}).length).toBe(3);
        expect(screen.getByText(inputValue)).toBeTruthy();
    })

    test('Should NOT increment category length when added category is repeted',()=> {
        render(<GifHunterApp/>);
        expect(screen.getAllByRole("heading", {level: 3}).length).toBe(2);
        
        findNewGif('House of the Dragon');
        
        expect(screen.getAllByRole("heading", {level: 3}).length).toBe(2);
    })
 })