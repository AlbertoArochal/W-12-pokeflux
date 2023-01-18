export const initialState = {
    offset: 0,
    limit: 25,
};

export const paginationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return {
                ...state,
                offset: state.offset + action.payload,
                limit: action.payload,
            };

        case 'PREV_PAGE':
            return {
                ...state,
                offset: state.offset - action.payload,
                limit: action.payload,
            };
        default:
            return state;
    }
};
