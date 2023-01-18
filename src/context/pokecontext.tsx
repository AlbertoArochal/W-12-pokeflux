import { createContext, useState, useReducer } from 'react';
import { PokeaType } from '../components/pokeloader/pokeloader';
import { paginationReducer, initialState } from '../components/reducer/reducer';

interface PokeContextType {
    pokeArray: PokeaType[];
    setPokeArray: any;
    paginationState: typeof initialState;
    paginationDispatch: React.Dispatch<any>;
}

export const PokeContext = createContext<PokeContextType>({
    pokeArray: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setPokeArray: () => {},
    paginationState: initialState,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    paginationDispatch: () => {},
});

export const PokeProvider = ({ children }: any) => {
    const [pokeArray, setPokeArray] = useState<PokeaType[]>([]);
    const [paginationState, paginationDispatch] = useReducer(
        paginationReducer,
        initialState
    );
    return (
        <PokeContext.Provider
            value={{
                pokeArray,
                setPokeArray,
                paginationState,
                paginationDispatch,
            }}
        >
            {children}
        </PokeContext.Provider>
    );
};
