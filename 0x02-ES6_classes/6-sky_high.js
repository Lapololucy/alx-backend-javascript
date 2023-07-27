import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor with the sqft attribute
    this._floors = floors;
  }

  // Getter for the floors attribute
  get floors() {
    return this._floors;
  }

  // Setter for the floors attribute
  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = value;
  }

  // Method to override the evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
