// Code your solution in this file!

function distanceFromHqInBlocks(blockNumber) {
    const headquartersBlock = 42;
    return Math.floor(blockNumber - headquartersBlock);
  }
  function distanceFromHqInBlocks(blockNumber) {
    const headquartersBlock = 42;
    
    if (blockNumber < headquartersBlock) {
      return headquartersBlock - blockNumber;
    } else {
      return blockNumber - headquartersBlock;
    }
    }
  
  function distanceFromHqInFeet(blockNumber) {
    const blockInFeet = 264; 
    const distanceInBlocks = distanceFromHqInBlocks(blockNumber);
    return distanceInBlocks * blockInFeet;
}
  

  function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const blockInFeet = 264;
    return distanceInBlocks * blockInFeet;
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0; // Free sample
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const distanceWithoutFreeFt = distanceInFeet - 400;
      const farePrice = distanceWithoutFreeFt * 0.02;
      return farePrice;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Fixed fare price for distance over 2000 feet
    } else {
      return 'cannot travel that far'; // Cannot travel more than 2500 feet
    }
  }
  
