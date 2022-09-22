const audio1 = document.getElementById('main-audio')
var songUpload = document.querySelector('#songUpload');
var input = document.querySelector('input');
const progressArea = document.querySelector(".progress-area")
const progressBar = document.querySelector(".progress-bar")
const softplay = document.querySelector('.playeraction')
const playPauseBtn = document.getElementById('softplay')

songUpload.addEventListener("change", (event) => {
    var files = event.target.files;
    
    const validator = document.getElementById("src").getAttribute.length
    console.log(validator)
    if(event.target.files.length === 0){
        console.log('kya bein vishedi')
    }else{
        pauseMusic()
        progressBar.style.width = `0%`;
        volumePopup.classList.remove('faded__volume')
        volumePopupvalue.classList.remove('faded__volume')

        document.getElementById("src").setAttribute("src", URL.createObjectURL(files[0]));
        document.querySelector(".audio").load();
        console.log(files)
        

    }

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
    const checker = document.getElementById("src").getAttribute('src').length
    
    if(checker === 0){
        console.log('Select a File Please')
    }else{
        
        const isMusicPlay = softplay.classList.contains("paused");
        isMusicPlay ? pauseMusic() : playMusic();
    }
    
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
    const checker = document.getElementById("src").getAttribute('src').length
    if(checker === 0){
        console.log('Select A File Please')
    }else{

        let progressWidth = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX; 
        let songDuration = audio1.duration; 
        audio1.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    }
    
    
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
        repeatBtn.classList.remove('ri-repeat-one-fill')

    }else{
        repeatBtn.classList.add('faded__active')
        repeatBtn.classList.add('ri-repeat-one-fill')

    }
})
let musicIndex = Math.floor((Math.random() * audio1.length) + 1);

audio1.addEventListener('ended', ()=> {
    // let loopActive = repeatBtn.classList.contains('faded__active')
    if(repeatBtn.classList.contains('faded__active')){
        audio1.currentTime = 0
        playMusic()
    }else{
        if(softplay.classList.contains('paused')){
            softplay.classList.remove("paused");
            softplay.classList.add('ri-play-line');
            softplay.classList.remove('ri-pause-fill');
        }

        progressBar.style.width = `0%`;
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



var input =  document.querySelector('.uploader')


input.addEventListener('change', (event) => {
    var file = event.target.files[0]


    if(event.target.files.length === 0){
        console.log('kya bein vishedi')
    }else{
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
                    if(tag.tags.hasOwnProperty('picture')){
                        if(tag.tags.picture.description === ""){
                            document.querySelector(".music__img").style.backgroundImage = 'url(./assets/img/music.png)';
        
                        }else{
        
                            document.querySelector('.music__img').style.backgroundImage = 'url(data:'+format+';base64,'+window.btoa(base64String)+')'
                        }
    
                    }else{
                    }
                    document.querySelector(".music__title-name").textContent = tag.tags.title;
                    document.title = tag.tags.title;
                    document.querySelector(".song__album-name").textContent = tag.tags.album;
                    document.querySelector('.song__details_artist-name').textContent = tag.tags.TPE2.data
                    document.querySelector('.song__details_singer-name').textContent = tag.tags.TPE1.data
                    document.querySelector('.song__details_genre-name').textContent = tag.tags.TCON.data
                    document.querySelector('.song__details_date-released_year').textContent = tag.tags.TDRC.data
    
    
                }
                
                catch(error){
                    console.log(error)
    
                    if(tag.tags.hasOwnProperty('picture')){
                        if(tag.tags.picture.description === ""){
                            document.querySelector(".music__img").style.backgroundImage = 'url(./assets/img/music.png)';
        
                        }else{
        
                            document.querySelector('.music__img').style.backgroundImage = 'url(data:'+format+';base64,'+window.btoa(base64String)+')'
                        }
    
                    }else{
                        console.log('Some data not founded')
                        
                        
                    }
                    document.querySelector(".music__img").style.backgroundImage = 'url(./assets/img/music.png)';
                    document.querySelector(".music__title-name").textContent = file.name.slice(0, -4);
                    document.title = file.name.slice(0, -4);

                   
                    document.querySelector(".song__album-name").textContent = 'Unknown Album'
                    document.querySelector('.song__details_artist-name').textContent = 'Unknown Artist'
                    document.querySelector('.song__details_singer-name').textContent = 'Unknown Singer'
                    document.querySelector('.song__details_genre-name').textContent = 'Unknown Genre'
                    document.querySelector('.song__details_date-released_year').textContent = 'Unknown Year'
    
                }
                }
        })

    }

    
})


var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 150) + "px";
}
const volumeBtn = document.querySelector('.volumeTrack')
const volumePopup = document.querySelector('.rs-range')
const volumePopupvalue = document.querySelector('.rs-label')

function showvolume(){
    volumeBtn.classList.add('unactive')
    volumePopup.style.transform = 'scale(1)'
    console.log('show')
   
}

function hidevolume(){
    volumeBtn.classList.remove('unactive')
    volumePopup.style.transform = 'scale(0)'
    console.log('hide')
}

volumeBtn.addEventListener("click", ()=> {
    if(volumeBtn.classList.contains('unactive')){
        volumeBtn.classList.remove('unactive')
        volumePopup.classList.remove('faded__volume')
        volumePopupvalue.classList.remove('faded__volume')

        

        
    }else{
        volumeBtn.classList.add('unactive')
        volumePopup.classList.add('faded__volume')
        volumePopupvalue.classList.add('faded__volume')



    }

  
   
    

})






document.addEventListener('click', function(e){
    let inside = (e.target.closest('#range-slide'));
    if(document.querySelector('.volumeTrack').classList.contains('unactive')){
        if(inside){
            console.log('hi')
            console.log(!inside)
            
           
            

          
        }

    }
  });
