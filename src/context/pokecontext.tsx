import { createContext, useState, useReducer } from 'react';
import { PokeaType } from '../components/pokeloader/pokeloader';
import { paginationReducer, initialState } from '../components/reducer/reducer';
import { faveReducer, initialPoke } from '../components/reducer/reducerFave';

interface PokeContextType {
    pokeArray: PokeaType[];
    setPokeArray: any;
    paginationState: typeof initialState;
    paginationDispatch: React.Dispatch<any>;
    faveState: any;
    faveDispatch: React.Dispatch<any>;
}

export const PokeContext = createContext<PokeContextType>({
    pokeArray: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setPokeArray: () => {},
    paginationState: initialState,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    paginationDispatch: () => {},
    faveState: initialPoke,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    faveDispatch: () => {},
});

export const PokeProvider = ({ children }: any) => {
    const [pokeArray, setPokeArray] = useState<PokeaType[]>([]);
    const [paginationState, paginationDispatch] = useReducer(
        paginationReducer,
        initialState
    );
    const [faveState, faveDispatch] = useReducer(faveReducer, initialPoke);
    return (
        <PokeContext.Provider
            value={{
                pokeArray,
                setPokeArray,
                paginationState,
                paginationDispatch,
                faveState,
                faveDispatch,
            }}
        >
            {children}
        </PokeContext.Provider>
    );
};
