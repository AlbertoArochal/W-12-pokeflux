export const nextPage = () => {
    return {
        type: 'NEXT_PAGE',
        payload: 25,
    };
};

export const prevPage = () => {
    return {
        type: 'PREV_PAGE',
        payload: 25,
    };
};
