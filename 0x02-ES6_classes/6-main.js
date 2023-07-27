import SkyHighBuilding from './6-sky_high';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft); // Output: 140
console.log(building.floors); // Output: 60
console.log(building.evacuationWarningMessage()); // Output: Evacuate slowly the 60 floors.
