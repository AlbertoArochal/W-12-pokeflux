import { nextPage, prevPage, selectFave } from './actions';

describe('nextPage action', () => {
    it('should return an action object with type "NEXT_PAGE" and payload of 25', () => {
        const expectedAction = {
            type: 'NEXT_PAGE',
            payload: 25,
        };

        expect(nextPage()).toEqual(expectedAction);
    });
});

describe('prevPage action', () => {
    it('should return an action object with type "PREV_PAGE" and payload of 25', () => {
        const expectedAction = {
            type: 'PREV_PAGE',
            payload: 25,
        };

        expect(prevPage()).toEqual(expectedAction);
    });
});

describe('selectFave action', () => {
    it('should return an action object with type "SELECT_FAVE" and payload of a pokemon object', () => {
        const pokemon = { name: 'Pikachu', id: 25 };
        const expectedAction = {
            type: 'SELECT_FAVE',
            payload: pokemon,
        };

        expect(selectFave(pokemon)).toEqual(expectedAction);
    });
});
