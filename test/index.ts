'use strict';

import { expect } from 'chai';
import { sort } from '../dist/sort';

describe('Standard cases', () => {
  // it('should create an instance using its constructor', () => {
  // 	const example: Example = new Example()
  // 	expect(example, 'example should exist').to.exist
  // })

  it('dummy case', () => {
    const out = sort(0, 0, 0, 0);

    expect(out).to.equal('STANDARD', 'dummy case');
  });
});
