var audio = document.getElementsByTagName("audio")

window.addEventListener('keydown', function(e){
  if(e.keyCode === 65){
    audio[0].play()
  } else if (e.keyCode === 83){
    audio[1].play()
  } else if (e.keyCode === 68){
    audio[2].play()
  } else if (e.keyCode === 70){
    audio[3].play()
  } else if (e.keyCode === 71){
    audio[4].play()
  } else if (e.keyCode === 72){
    audio[5].play()
  } else if (e.keyCode === 74){
    audio[6].play()
  } else if (e.keyCode === 75){
    audio[7].play()
  } else if (e.keyCode === 76){
    audio[8].play()
  }
});