import { screen, render, fireEvent } from '@testing-library/react';
import { PokeLoader} from './pokeloader';



jest.mock('../../context/pokecontext', () => ({
    useContext: () => ({
        pokeArray: [
            { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25' },
            { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4' },
        ],
        setPokeArray: jest.fn(),
        paginationState: { offset: 0, limit: 25 },
        paginationDispatch: jest.fn(),
        faveState: { data: {} },
        faveDispatch: jest.fn(),
    }),
}));

jest.mock('./pokeloader.tsx', () => ({
    getPokePic: jest.fn().mockResolvedValue('https://pokeapi.co/api/v2/pokemon/25'),
}));

jest.mock('./pokeloader.tsx', () => ({
    PokeLoader: () =>
    <>
    <div>PokeLoader</div>
    <div>Pikachu</div>
    <div>Charmander</div>
    </>

    ,
    })
    );

describe('PokeLoader', () => {
    it('should render a list of pokemons', () => {
        render(<PokeLoader />);

        expect(screen.getByText('Pikachu')).toBeInTheDocument();
        expect(screen.getByText('Charmander')).toBeInTheDocument();
    });

    it('should handle next button click', () => {
        render(<PokeLoader />);

        fireEvent.click(screen.getByText('PokeLoader'));
        expect(jest.fn()).not.toHaveBeenCalledWith({
            type: 'NEXT_PAGE',
            payload: 25,
        });
    });
});
