const repeatedWord=require('../repetedWord');

describe('Repeted Word',()=>{

  it('return the first word repeted',()=>{
    let repeated=' good evening from my evening';
    expect(repeatedWord(repeated)).toEqual('evening');
  });

  it('return null if there not word repeated  ',()=>{
    let repeated=' good evening every one';
    expect(repeatedWord(repeated)).toEqual(null);
  });
});
