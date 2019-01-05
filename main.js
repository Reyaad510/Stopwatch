
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
    let duration = 0;

    this.start = function() {
        
    };
    this.stop = function() {
        
    };
    this.reset = function() {
        
    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}
    })
}

const sw = new Stopwatch();