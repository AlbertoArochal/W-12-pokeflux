import { paginationReducer, initialState } from './reducer';

describe('paginationReducer', () => {
    it('should return the initial state', () => {
        expect(paginationReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle NEXT_PAGE', () => {
        const payload = 25;
        const action = { type: 'NEXT_PAGE', payload };
        const expectedState = { offset: 25, limit: 25 };
        expect(paginationReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle PREV_PAGE', () => {
        const payload = 25;
        const action = { type: 'PREV_PAGE', payload };
        const expectedState = { offset: -25, limit: 25 };
        expect(paginationReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle unknown action type', () => {
        const action = { type: 'UNKNOWN' };
        expect(paginationReducer(initialState, action)).toEqual(initialState);
    });
});
