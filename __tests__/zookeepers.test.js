const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper,
} = require('../lib/zookeepers');

const { zookeepers } = require('../data/zookeepers.json');

const startingZookeepers = [
  {
    id: '2',
    name: 'Raksha',
    age: 31,
    favoriteAnimal: 'penguin',
  },
  {
    id: '3',
    name: 'Isabella',
    age: 67,
    favoriteAnimal: 'bear',
  },
];

jest.mock('fs');

describe('Zookeepers', () => {
  it('create a new zookeeper', () => {
    const expected = { name: 'Daniel', id: '7' };

    const result = createNewZookeeper({ name: 'Daniel', id: '7' }, zookeepers);

    expect(result).toEqual(expected);
  });

  it('should filter by query', () => {
    const expected = [
      {
        id: '2',
        name: 'Raksha',
        age: 31,
        favoriteAnimal: 'penguin',
      },
    ];

    const result = filterByQuery(
      { favoriteAnimal: 'penguin' },
      startingZookeepers
    );

    expect(result).toEqual(expected);
  });

  it('should find by id', () => {
    const expected = {
      id: '2',
      name: 'Raksha',
      age: 31,
      favoriteAnimal: 'penguin',
    };

    const result = findById('2', startingZookeepers);

    expect(result).toEqual(expected);
  });

  it('should validate age', () => {
    const zookeeper = {
      id: '2',
      name: 'Raksha',
      age: 31,
      favoriteAnimal: 'penguin',
    };

    const invalidZookeeper = {
      id: '3',
      name: 'Isabella',
      age: '67',
      favoriteAnimal: 'bear',
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
  });
});
