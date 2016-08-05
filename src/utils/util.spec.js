import chai from 'chai';
import * as Util from './util';

chai.should();

describe('Util', () =>{
    it('returns a number you pass it', () => {
        Util.ReturnNum(5).should.equal(5);
    });
});