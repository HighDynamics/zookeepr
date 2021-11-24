const {
  filterByQuery,
  findById,
  createNewAnimal,
  validateAnimal,
} = require('../lib/animals');

const { animals } = require('../data/animals');

const startingAnimals = [
  {
    id: '3',
    name: 'Erica',
    species: 'gorilla',
    diet: 'omnivore',
    personalityTraits: ['quirky', 'rash'],
  },
  {
    id: '4',
    name: 'Noel',
    species: 'bear',
    diet: 'carnivore',
    personalityTraits: ['impish', 'sassy', 'brave'],
  },
];

jest.mock('fs');

describe('Animals', () => {
  it('should create an animal object', () => {
    const expected = { name: 'Darlene', id: 'thisIsDarlene' };

    const result = createNewAnimal(
      { name: 'Darlene', id: 'thisIsDarlene' },
      animals
    );

    expect(result).toEqual(expected);
  });

  it('should filter by query', () => {
    const expected = [
      {
        id: '4',
        name: 'Noel',
        species: 'bear',
        diet: 'carnivore',
        personalityTraits: ['impish', 'sassy', 'brave'],
      },
    ];

    result = filterByQuery({ species: 'bear' }, startingAnimals);

    expect(result).toEqual(expected);
  });

  it('should return by id', () => {
    const expected = {
      id: '4',
      name: 'Noel',
      species: 'bear',
      diet: 'carnivore',
      personalityTraits: ['impish', 'sassy', 'brave'],
    };

    const result = findById('4', startingAnimals);

    expect(result).toEqual(expected);
  });

  it('should validate personality traits', () => {
    const animal = {
      id: '3',
      name: 'Erica',
      species: 'gorilla',
      diet: 'omnivore',
      personalityTraits: ['quirky', 'rash'],
    };

    const invalidAnimal = {
      id: '3',
      name: 'Erica',
      species: 'gorilla',
      diet: 'omnivore',
    };

    const result = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);

    expect(result).toBe(true);
    expect(result2).toBe(false);
  });
});
