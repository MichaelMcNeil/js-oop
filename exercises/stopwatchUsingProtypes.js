// This exercise created a stopwatch that has a very bad design.
// Adding the stopwatches methods to its protoype provides useful optimization (if you needed A LOT of stopwatches)
// Yet it forces us to exposes the stopwatches private members...breaking the oop principle of abstraction

const sw = new Stopwatch();

function Stopwatch() {
  let startTime,
    endTime,
    started,
    duration = 0;

  Object.defineProperties(this, {
    startTime: {
      get: function() {
        return startTime;
      },
      set: function(value) {
        startTime = value;
      }
    },
    endTime: {
      get: function() {
        return endTime;
      },
      set: function(value) {
        endTime = value;
      }
    },
    started: {
      get: function() {
        return started;
      },
      set: function(value) {
        started = value;
      }
    },
    duration: {
      get: function() {
        return duration;
      },
      set: function(value) {
        duration = value;
      }
    }
  });
}

Stopwatch.prototype.start = () => {
  if (this.started) throw new Error("Already started...");
  this.started = true;
  this.startTime = new Date();
};

Stopwatch.prototype.stop = () => {
  if (!this.started) throw new Error("Already stopped...");
  this.started = false;
  this.endTime = new Date();
  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

Stopwatch.prototype.reset = () => {
  this.duration = 0;
  this.startTime = null;
  this.endTime = null;
  this.started = false;
};
