import { getPokePic } from './getpokepic';

describe('getPokePic', () => {
    it('should return the URL of the front default sprite of the given pokemon', async () => {
        const url = await getPokePic('pikachu');
        expect(url).toEqual(
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
        );
    });
});
