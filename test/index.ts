'use strict';

import { expect } from 'chai';
import { sort } from '../dist/sort';

describe('Standard cases', () => {
  it('the smallest package ever', () => {
    const out = sort(0, 0, 0, 0);

    expect(out).to.equal('STANDARD', 'dummy case');
  });
});
