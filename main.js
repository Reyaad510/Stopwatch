
// const sw = new Stopwatch()

// property
// Initially 0
// sw.duration
// 3 methods
// Can't call stop or start twice in row, will throw error
// sw.start
// sw.stop
// sw.reset


function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        // Validation check
        if (running) 
        throw new Error('Stopwatch has already started'); 

        // If no error
        running = true;

        startTime = new Date();
    };

    this.stop = function() {
        // Validation check
        if(!running) 
        throw new Error('Stopwatch is not started.');

        // If no error
        running = false;

        endTime = new Date();
        
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
        
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
        
    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}
    })
}

const sw = new Stopwatch();

