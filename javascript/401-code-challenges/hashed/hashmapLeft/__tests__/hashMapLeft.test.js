const hashMapLeft = require('../hashMapLeft');
const Hash = require('../hashtable');

describe('hash map left join test', () => {
  let left;
  let right;

  beforeAll(() => {
    left = new Hash(50);
    left.add('name', 'essam');
    left.add('age', '28');
    left.add('education ', 'Mechanical Engineering');
    left.add('carType', 'volkswagen');
    left.add('hobby', 'driving');

    right = new Hash(50);
    right.add('name', 'omar');
    right.add('age', '60');
    right.add('education ', 'accountant');
    right.add('hobby', 'reding');
    right.add('food', 'rice');
  });

  it('Return the left join between two hashmaps', () => {
    expect(hashMapLeft(left, right)).toEqual([
      ['education ', 'Mechanical Engineering', 'accountant'],
      ['hobby', 'driving' ,'reding' ],
      ['carType', 'volkswagen', ''],
      ['name', 'essam', 'omar'],
      ['age', '28', '60']
    ]);
  });
});
