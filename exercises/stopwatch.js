const sw = new Stopwatch();

function Stopwatch() {
  let startTime,
    endTime,
    started,
    duration = 0;

  this.start = () => {
    if (started) throw new Error("Already started...");
    started = true;
    startTime = new Date();
  };

  this.stop = () => {
    if (!started) throw new Error("Already stopped...");
    started = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = () => {
    duration = 0;
    startTime = null;
    endTime = null;
    started = false;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}
