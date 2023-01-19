import { render, screen } from '@testing-library/react';
import PokeRouter from './pokerouter';

describe('PokeRouter', () => {
    it('should render the PokeView component when the path is "/home"', () => {
        render(<PokeRouter />);
        expect(screen.getByText('PokeView')).toBeInTheDocument();
    });

    it('should render the FavoPage component when the path is "/favorites"', () => {
        render(<PokeRouter />);
        expect(screen.getByText('FavoPage')).toBeInTheDocument();
    });

    it('should redirect to "/home" when the path is not matched', () => {
        render(<PokeRouter />);
        expect(screen.getByText('PokeView')).toBeInTheDocument();
    });
});
