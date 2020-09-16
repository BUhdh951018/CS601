var timer = document.getElementById('timer');
var togglebutton = document.getElementById('toggle');
var resetbutton = document.getElementById('reset');

var watch = new Stopwatch(timer);

togglebutton.addEventListener('click', function(){
    if(watch.isOn){
        watch.stop();
        togglebutton.textContent = 'Start';
    }
    else{
        watch.start();
        togglebutton.textContent = 'Stop';
    }
});

resetbutton.addEventListener('click', function(){
    watch.reset();
});