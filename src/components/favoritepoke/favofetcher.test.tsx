import fetchMock from 'jest-fetch-mock';
import { render } from '@testing-library/react';
import {FaveFetcher} from './favofetcher';

test('calls the fetch function with the correct URL', () => {
  fetchMock.mockResponse(JSON.stringify({
    json: () =>
      Promise.resolve([
        { id: 1, name: 'Pikachu' },
        { id: 2, name: 'Charmander' },
        { id: 3, name: 'Squirtle' },
      ]),
  }));
  render(<FaveFetcher />);
  expect(fetchMock).not.toHaveBeenCalled();
  expect(fetchMock).toHaveBeenCalledWith('http://localhost:3000/Pokemons');
});

