export const initialPoke: any = {
    data: {},
};

export const faveReducer = (state = initialPoke, action: any) => {
    switch (action.type) {
        case 'SELECT_FAVE':
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
