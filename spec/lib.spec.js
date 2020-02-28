import { getCommonPasswords, validateLength, validateCharacters, validateStrength } from '../app/js/lib';
import { SUCCESS, ERRORS } from '../app/js/constants';

describe('lib functions', () => {
    describe('validateLength(str)', () => {
        it('returns success message', () => {
            const goodPassword = "I'm a good password!";
            const validate = validateLength(goodPassword);
            expect(validate).toEqual(SUCCESS);
        });

        describe('returns an error message', () => {
            it('with < 8 characters', () => {
                const shortPassword = "short";
                const validate = validateLength(shortPassword);
                expect(validate).toEqual(ERRORS.LENGTH);
            });
            it('with > 64 characters', () => {
                const longPassword = "This is a very very very every long password. Oh my goddd, why is this password so loooonnnnggggg";
                const validate = validateLength(longPassword);
                expect(validate).toEqual(ERRORS.LENGTH);
            });
        });
    });

    describe('validateCharacters(str)', () => {
        it('returns a success message', () => {
            const goodPassword = "m0stSecr3";
            const validate = validateCharacters(goodPassword);
            expect(validate).toEqual(SUCCESS);
        });

        it('returns an error message', () => {
            const invalidPassword = "¡mucho€!";
            const validate = validateCharacters(invalidPassword);
            expect(validate).toEqual(ERRORS.CHARACTER);
        });
    });

    describe('validateStrength(str, array)', () => {
        const mockArray = ['123456', 'password', 'drowssap'];

        it('returns a success message', () => {
            const strongPassword = "s0$tr0ng";
            const validate = validateStrength(strongPassword, mockArray);
            expect(validate).toEqual(SUCCESS);
        });

        it('returns an error message', () => {
            const weakPassword = "123456";
            const validate = validateStrength(weakPassword, mockArray);
            expect(validate).toEqual(ERRORS.COMMON);
        });
    });
});