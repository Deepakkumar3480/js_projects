par();
function par(){
    var count = 1000;
    var container = document.querySelector('.container')
    var i=0;
    while(i<count){
        var p = document.createElement('i');
        var x = Math.floor(Math.random()*window.innerWidth);
        var y = Math.floor(Math.random()*window.innerHeight);
        var size = Math.random()*20;
        p.style.width=1+size+'px';
        p.style.height=1+size+'px';
        p.style.left = x+'px';
        p.style.top = y+'px';
        p.style.animationDuration=5+size+'s'
        p.style.animationDelay=-size+'s'
        container.appendChild(p);
        i++;
    }
}