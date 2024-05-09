const naoButton = document.getElementById("nao");
const container = document.querySelector(".pai");

let isOriginalPosition = true;

function fuja() {
    
        var largura = window.innerWidth
        var altura = window.innerHeight
    
        var maxx = largura - naoButton.offsetWidth
        var maxy = altura - naoButton.offsetHeight
        
        var aleatoriox = Math.floor(Math.random(200) * maxx)
        var aleatorioy = Math.floor(Math.random(200) * maxy)
    
        naoButton.style.top = aleatorioy + "px";
        naoButton.style.right = aleatoriox + "px"; 
    
  isOriginalPosition = !isOriginalPosition;
};

var mySong = document.getElementById("mySong");
            var icon = document.getElementById("icon");

            icon.onclick = function(){
                if(mySong.paused){
                mySong.play();
                icon.src = "img/pause.PNG"
            } else { 
                mySong.pause();
                icon.src = "img/play.PNG"
            }

        }