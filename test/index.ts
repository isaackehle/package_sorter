'use strict';

import { expect } from 'chai';
import { sort } from '../dist/sort';

describe('Standard cases', () => {
  it('the smallest package ever', () => {
    const out = sort(0, 0, 0, 0);

    expect(out).to.equal('STANDARD');
  });

  it('small dimensions', () => {
    const out = sort(1, 1, 1, 1);

    expect(out).to.equal('STANDARD');
  });

  it('dimensions close to threshold', () => {
    const out = sort(100, 100, 99.99999, 19.99999);

    expect(out).to.equal('STANDARD');
  });
});

describe('Special cases', () => {
  it('Heavy threshold exact', () => {
    const out = sort(100, 100, 90, 20);

    expect(out).to.equal('SPECIAL');
  });

  it('Heavy threshold over', () => {
    const out = sort(100, 100, 90, 2000);

    expect(out).to.equal('SPECIAL');
  });

  it('Volume threshold exact', () => {
    const out = sort(100, 100, 100, 10);

    expect(out).to.equal('SPECIAL');
  });

  it('Volume threshold over', () => {
    const out = sort(101, 101, 101, 10);

    expect(out).to.equal('SPECIAL');
  });

  it('Too wide', () => {
    const out = sort(200, 10, 10, 10);

    expect(out).to.equal('SPECIAL');
  });

  it('Too tall', () => {
    const out = sort(10, 200, 10, 10);

    expect(out).to.equal('SPECIAL');
  });

  it('Too long', () => {
    const out = sort(10, 10, 200, 10);

    expect(out).to.equal('SPECIAL');
  });
});
