import { Logger } from 'sitka';
import { StackName } from './definitions';
export class DecisionMaker {
  private _logger: Logger;
  private width: number;
  private height: number;
  private length: number;
  private mass: number;

  constructor(width: number, height: number, length: number, mass: number) {
    this._logger = Logger.getLogger({
      name: this.constructor.name,
    });

    this.width = width;
    this.height = height;
    this.length = length;
    this.mass = mass;
  }
  public sort(): StackName {
    this._logger.debug('sorting: ', {
      width: this.width,
      height: this.height,
      length: this.length,
      mass: this.mass,
    });

    return 'STANDARD';
  }
}
