import { Route, Routes, Navigate } from 'react-router-dom';
import { FavoPage } from '../components/favoritepoke/favopage';
import { PokeView } from '../components/pokeview/pokeview';

export const PokeRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<PokeView />} />
                <Route path="/favorites" element={<FavoPage />} />
            </Routes>
        </>
    );
};
