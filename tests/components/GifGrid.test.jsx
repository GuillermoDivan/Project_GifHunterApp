import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Tests on <GifGrid />', () => {

    const category = 'Pedro Pascal';

    test('Should show loading at first', () => { 
        useFetchGifs.mockReturnValue({ images: [], isLoading: true })

        render(<GifGrid category={category} />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));

    })

    test('Should show items when useFetchGifs are loaded', () => {
        const gifs = [{
            id: 'Pedro_Pascal_1',
            title: 'Pedro_Pascal_1',
            url: 'http://localhost/pedropascal1.jpg'
        },{
            id: 'Pedro_Pascal_2',
            title: 'Pedro_Pascal_2',
            url: 'http://localhost/pedropascal2.jpg'
    }]

        useFetchGifs.mockReturnValue({ images: gifs, isLoading: false })

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);
    })

})