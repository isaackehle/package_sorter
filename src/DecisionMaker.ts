import { Logger } from 'sitka';
export class DecisionMaker {
	private _logger: Logger;

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
		this._logger = Logger.getLogger({ name: this.constructor.name });

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
		this._logger.debug(`volume ${this.volume} vs ${this.maxVolume}`);
		this._logger.debug(`sides [${this.width} ${this.height} ${this.length}] ${this.maxDimension}`);

		return this.volume >= this.maxVolume || [this.width, this.height, this.length].some((x) => x >= this.maxDimension);
	}

	public isHeavy(): boolean {
		this._logger.debug(`volume ${this.mass} vs ${this.maxMass}`);

		return this.mass >= this.maxMass;
	}
}
