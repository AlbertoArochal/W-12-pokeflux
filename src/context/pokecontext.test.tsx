import { render, screen } from '@testing-library/react';
import { PokeProvider } from './pokecontext';

describe('PokeProvider', () => {
    it('should provide the pokeArray state', () => {
        render(
            <PokeProvider>
                <div>pokeArray</div>
            </PokeProvider>
        );
        expect(screen.getByText('pokeArray')).toBeInTheDocument();
    });

    it('should provide the setPokeArray state', () => {
        render(
            <PokeProvider>
                <div>setPokeArray</div>
            </PokeProvider>
        );
        expect(screen.getByText('setPokeArray')).toBeInTheDocument();
    });

    it('should provide the paginationState state', () => {
        render(
            <PokeProvider>
                <div>paginationState</div>
            </PokeProvider>
        );
        expect(screen.getByText('paginationState')).toBeInTheDocument();
    });

    it('should provide the paginationDispatch state', () => {
        render(
            <PokeProvider>
                <div>paginationDispatch</div>
            </PokeProvider>
        );
        expect(screen.getByText('paginationDispatch')).toBeInTheDocument();
    });

    it('should provide the faveState state', () => {
        render(
            <PokeProvider>
                <div>faveState</div>
            </PokeProvider>
        );
        expect(screen.getByText('faveState')).toBeInTheDocument();
    });

    it('should provide the faveDispatch state', () => {
        render(
            <PokeProvider>
                <div>faveDispatch</div>
            </PokeProvider>
        );
        expect(screen.getByText('faveDispatch')).toBeInTheDocument();
    });
});
