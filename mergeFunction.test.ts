import { merge } from './mergeFunction';

describe('merge', () => {
  it('should merge two sorted arrays', () => {
    const collection_1 = [1, 2, 3];
    const collection_2 = [4, 5, 6];
    const expected = [1, 2, 3, 4, 5, 6];

    const result = merge(collection_1, collection_2);

    expect(result).toEqual(expected);
  });
});
