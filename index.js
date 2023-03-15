function distanceFromHqInBlocks(someValue) {
    const hq = 42; // Scuber's headquarters is on 42nd street
    return Math.abs(hq - someValue);
  }
  
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264; // Each block is 264 feet long
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination);
    const feetPerBlock = 264;
    return distance * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return fare;
  }
  