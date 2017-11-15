const chai = require('chai');
const expect = chai.expect;
const Game_Helper = require('../../../server/game_helper/');
const WIN_TYPES = require('../../../server/constants').WIN_TYPES;

describe('Game_Helper', function() {
    it('getRandomDigit() should return random digit from 0 to 5 including', function() {
        const randomDigit = Game_Helper.getRandomDigit();

        expect(randomDigit, 'Random digit should be a number').to.be.a('number');
        expect(randomDigit, 'Random digit should be less than 6').to.be.lessThan(6);
    });

    it('getTypeOfWin() should return types of win', function() {
        const noWinPattern = [1,2,3];
        const noWin = Game_Helper.getTypeOfWin(noWinPattern);

        const smallWinPattern = [1,2,1];
        const smallWin = Game_Helper.getTypeOfWin(smallWinPattern);

        const bigWinPattern = [4,4,4];
        const bigWin = Game_Helper.getTypeOfWin(bigWinPattern);

        expect(noWin, 'No Win!').to.contain(WIN_TYPES.NO);
        expect(smallWin, 'Small Win!').to.contain(WIN_TYPES.SMALL);
        expect(bigWin, 'Big Win!').to.contain(WIN_TYPES.BIG);
    });
});
