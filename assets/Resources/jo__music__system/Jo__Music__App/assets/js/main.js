const audio1 = document.getElementById('main-audio')
var songUpload = document.querySelector('#songUpload');
var input = document.querySelector('input');
const progressArea = document.querySelector(".progress-area")
const progressBar = document.querySelector(".progress-bar")
const softplay = document.querySelector('.playeraction')
const playPauseBtn = document.getElementById('softplay')

songUpload.addEventListener("change", (event) => {
    var files = event.target.files;
    document.getElementById("src").setAttribute("src", URL.createObjectURL(files[0]));
    document.querySelector(".audio").load();
    console.log(files)
    

})

isMusicPaused = true;


//play music function
function playMusic(){
    softplay.classList.add("paused");
    softplay.classList.remove('ri-play-line');
    softplay.classList.add('ri-pause-fill');
    audio1.play();
   
}
  
  //pause music function
function pauseMusic(){
    softplay.classList.remove("paused");
    softplay.classList.add('ri-play-line');
    softplay.classList.remove('ri-pause-fill');

    audio1.pause();
    
}
  

playPauseBtn.addEventListener("click", ()=>{
    const isMusicPlay = softplay.classList.contains("paused");
    isMusicPlay ? pauseMusic() : playMusic();
    
  });
  
audio1.addEventListener("timeupdate", (e)=>{
  const currentTime = e.target.currentTime; 
  const duration = e.target.duration; 
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;
  let musicCurrentTime = document.querySelector(".current-time"),
  musicDuartion = document.querySelector(".max-duration");

  audio1.addEventListener("loadeddata", ()=>{
   
    let mainAdDuration = audio1.duration;
    let totalMin = Math.floor(mainAdDuration / 60);
    let totalSec = Math.floor(mainAdDuration % 60);
    if(totalSec < 10){ 
      totalSec = `0${totalSec}`;
    }
    musicDuartion.innerText = `${totalMin}:${totalSec}`;
  });

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if(currentSec < 10){ //if sec is less than 10 then add 0 before it
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;


})


progressArea.addEventListener("click", (e)=>{
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX; 
    let songDuration = audio1.duration; 
    audio1.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    
    
});
  

progressArea.addEventListener("dragstart", (e)=>{
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX; 
    let songDuration = audio1.duration; 
    
    audio1.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    
});
  
const repeatBtn = document.querySelector(".repeatsong");
repeatBtn.addEventListener('click', ()=> {
    if(repeatBtn.classList.contains('faded__active')){
        repeatBtn.classList.remove('faded__active')
    }else{
        repeatBtn.classList.add('faded__active')

    }
})
let musicIndex = Math.floor((Math.random() * audio1.length) + 1);

audio1.addEventListener('ended', ()=> {
    // let loopActive = repeatBtn.classList.contains('faded__active')
    if(repeatBtn.classList.contains('faded__active')){
        audio1.currentTime = 0
        playMusic()
    }
})



// window.addEventListener('keydown', e => {
//     if(e.key = 'MediaPlayPause'){
//         const isMusicPlay = softplay.classList.contains("paused");
//         //if isPlayMusic is true then call pauseMusic else call playMusic
//         isMusicPlay ? pauseMusic() : playMusic();
//     }
// })

// window.addEventListener('keyup', e=> {
//     console.log(e.key)
//     if(e.key = 'MediaPlayPause'){
//         const isMusicPlay = softplay.classList.contains("paused");
//         //if isPlayMusic is true then call pauseMusic else call playMusic
//         isMusicPlay ? pauseMusic() : playMusic();
//     }

// })


var input =  document.querySelector('input')
input.addEventListener('change', (event) => {
    var file = event.target.files[0]
    jsmediatags.read(file, {
        onSuccess: function(tag){

            try{
                console.log(tag)
                const data = tag.tags.picture.data
                const format = tag.tags.picture.format
                let base64String = ""
                for(let i = 0; i < data.length; i++){
                    base64String += String.fromCharCode(data[i])
                }
                document.querySelector('.music__img').style.backgroundImage = 'url(data:'+format+';base64,'+window.btoa(base64String)+')'
                document.querySelector(".music__title-name").textContent = tag.tags.album;

            }
            
            catch(error){
                console.log(error)
                document.getElementById("cover").style.backgroundImage = 'url(./assets/img/music.png)';
                document.querySelector(".music__title-name").textContent = " ";

            }
            }
    })

    
})
