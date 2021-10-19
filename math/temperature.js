/*
Write a class for a temperature tracker with the following methods:
1) insert() records a new temperature
2) getMax() returns the highest temperature recorded
3) getMin() returns the lowest temperature recorded
4) getMean() returns the mean of all recorded temperatures
5) getMode() returns the mode of all recorded temperatures. If there is more than one mode, return any of them.

Be sure to optimize for time and space, favoring speeding up the get methods over the insert method. Temperatures will be reported in Fahrenheit as numbers between 0 and 110.

  Idea 1: Insert temperatures into a map with their occurrences. Upon insertion, update previous values for max, min, mean, modes, number of entries and the number of occurrences of the modes. Retrieval of each get method would then simply retrieve their stored values in the object.

  Idea 2: Simplify tracking temperature occurrences by using an array. Can return any mode, so only update when new entry frequency exceeds mode frequency.
*/

class TempTracker {
  constructor() {
    this.temps = new Map();
    this.entries = 0;
    this.min = null;
    this.max = null;
    this.mean = null;
    this.mode = null;
    this.modeFrequency = null;
  }
  insert(temp) {
    let frequency = this.temps.get(temp);
    if (frequency) {
      frequency += 1;
    } else {
      frequency = 1;
    }
    this.temps.set(temp, frequency);

    // update min
    if (this.min) {
      this.min = Math.min(temp, this.min);
    } else {
      this.min = temp;
    }

    // update max
    if (this.max) {
      this.max = Math.max(temp, this.max);
    } else {
      this.max = temp;
    }

    // update mean
    let previousTotal = this.entries * this.mean;
    this.entries += 1;
    this.mean = (previousTotal + temp) / this.entries;
    
    // update mode
    if (frequency === this.modeFrequency) {
      this.mode.push(temp);
    } else if (frequency > this.modeFrequency) {
      this.mode = [temp];
      this.modeFrequency = frequency;
    }
  }
  getMax() {
    return this.max;
  }
  getMin() {
    return this.min;
  }
  getMean() {
    return this.mean;
  }
  getMode() {
    return this.mode;
  }
}
