window.addEventListener('scroll',function(){                      //<---Scroll event handler.
    let value = window.scrollY;  //<----Scroll down gains value points (in px). Scroll up misses value points.
    document.getElementById('text').style.top= 50+value*-0.5+'%';   //<---text delimited their top side.
    document.getElementById('bird1').style.top = value*-1.5+'px';   //<---birds delimits top & left side. Birds will move in 45deg from their respective sides.
    document.getElementById('bird1').style.left = value*2+'px';
    document.getElementById('bird2').style.top = value*-1.5+'px';
    document.getElementById('bird2').style.left = value*-5+'px';
    document.getElementById('btn').style.marginTop = value * 1.5+'px'; //<-----Generates margin in top side.
    document.getElementById('rocks').style.top = value * 0.12 + 'px'; //<----Like text element comment (line 3).
    document.getElementById('forest').style.top = value *0.25+'px';
    document.getElementById('header').style.top = value*0.5+'px';
})