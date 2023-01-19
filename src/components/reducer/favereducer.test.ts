import { faveReducer, initialPoke } from './reducerFave';

describe('faveReducer', () => {
    it('should return the initial state', () => {
        expect(faveReducer(undefined, {})).toEqual(initialPoke);
    });

    it('should handle SELECT_FAVE', () => {
        const action = {
            type: 'SELECT_FAVE',
            payload: { id: 1, name: 'Pikachu' },
        };
        const expectedState = { data: { id: 1, name: 'Pikachu' } };
        expect(faveReducer(initialPoke, action)).toEqual(expectedState);
    });

    it('should handle unknown action type', () => {
        const action = { type: 'UNKNOWN' };
        expect(faveReducer(initialPoke, action)).toEqual(initialPoke);
    });
});
