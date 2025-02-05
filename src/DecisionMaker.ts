export class DecisionMaker {
  private width: number;
  private height: number;
  private length: number;
  private mass: number;
  private volume: number;

  private maxVolume: number;
  private maxDimension: number;
  private maxMass: number;

  // units are centimeters for the dimensions and kilogram for the mass
  constructor(
    width: number,
    height: number,
    length: number,
    mass: number,
    maxVolume = 1000000,
    maxDimension = 150,
    maxMass = 20
  ) {
    this.width = width;
    this.height = height;
    this.length = length;
    this.mass = mass;

    this.volume = this.width * this.height * this.length;

    this.maxVolume = maxVolume;
    this.maxDimension = maxDimension;
    this.maxMass = maxMass;
  }

  public isBulky(): boolean {
    return this.volume >= this.maxVolume || [this.width, this.height, this.length].some((x) => x >= this.maxDimension);
  }

  public isHeavy(): boolean {
    return this.mass > this.maxMass;
  }
}
