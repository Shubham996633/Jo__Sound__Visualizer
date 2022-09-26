const audio1 = document.getElementById('main-audio')
var songUpload = document.querySelector('#songUpload');
var input = document.querySelector('input');
const progressArea = document.querySelector(".progress-area")
const progressBar = document.querySelector(".progress-bar")
const softplay = document.querySelector('.playeraction')
const playPauseBtn = document.getElementById('softplay')

songUpload.addEventListener("change", (event) => {
    fileValidation()
    var files = event.target.files;
    
    const validator = document.getElementById("src").getAttribute.length
    if(event.target.files.length === 0){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: 'File Not Uploaded'
          })
        
    }else{
        pauseMusic()
        progressBar.style.width = `0%`;
        volumePopup.classList.remove('faded__volume')
        volumePopupvalue.classList.remove('faded__volume')

        document.getElementById("src").setAttribute("src", URL.createObjectURL(files[0]));
        document.querySelector(".audio").load();
        

    }

})




isMusicPaused = true;

//play music function
function playMusic(){
    softplay.classList.add("paused");
    softplay.classList.remove('ri-play-line');
    softplay.classList.add('ri-pause-fill');
    audio1.play();
    visualizer()

   
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
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: 'Please Select File'
          })
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

window.addEventListener('keydown', (e)=> {
   
})
 
progressArea.addEventListener("click", (e)=>{
    const checker = document.getElementById("src").getAttribute('src').length
    if(checker === 0){
       
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: 'Please Select File'
          })
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

window.addEventListener('keydown', (e)=> {
    
    if(e.key === 'r' || e.key === 'R'){
        if(repeatBtn.classList.contains('faded__active')){
            repeatBtn.classList.remove('faded__active')
            repeatBtn.classList.remove('ri-repeat-one-fill')
    
        }else{
            repeatBtn.classList.add('faded__active')
            repeatBtn.classList.add('ri-repeat-one-fill')
    
        }

    }else if(e.key === 'p' || e.key === 'P'){
        const checker = document.getElementById("src").getAttribute('src').length
    
    if(checker === 0){
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: 'Please Select File'
          })
        }else{
            
            const isMusicPlay = softplay.classList.contains("paused");
            isMusicPlay ? pauseMusic() : playMusic();
        }
        }else if (e.key === 'u' || e.key === 'U'){

            
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
//     
//     if(e.key = 'MediaPlayPause'){
//         const isMusicPlay = softplay.classList.contains("paused");
//         //if isPlayMusic is true then call pauseMusic else call playMusic
//         isMusicPlay ? pauseMusic() : playMusic();
//     }

// })



var input =  document.querySelector('.uploader')


input.addEventListener('change', (event) => {
    fileValidation()
    var file = event.target.files[0]


    if(event.target.files.length === 0){
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: 'File Not Uploaded'
          })
    }else{
        jsmediatags.read(file, {
            onSuccess: function(tag){
                console.log(tag)
                if(tag.type === 'MP4'){
                    console.log('its video')
                    try{
                        const data = tag.tags.picture.data
                        const format = tag.tags.picture.format
                        let base64String = ""
                        for(let i = 0; i < data.length; i++){
                            base64String += String.fromCharCode(data[i])
                        }
                        if(tag.tags.hasOwnProperty('picture')){
                            if(tag.tags.picture.description === ""){
                                document.querySelector(".music__img").style.backgroundImage = 'url(./assets/img/music.png)';
    
                                const faviconLink = document.querySelector('#faviconImage');
    
                                faviconLink.href = './assets/img/music.png';
            
                            }else{
            
                                document.querySelector('.music__img').style.backgroundImage = 'url(data:'+format+';base64,'+window.btoa(base64String)+')'
                                const faviconLink = document.querySelector('#faviconImage');
    
                                faviconLink.href = 'data:'+format+';base64,'+window.btoa(base64String)+'';
                            }
        
                        }else{
                        }
                        document.querySelector(".music__title-name").textContent = file.name.slice(0, -4);
                        document.title = file.name.slice(0, -4)
                        document.querySelector(".song__album-name").textContent = tag.tags.album;
                        document.querySelector('.song__details_artist-name').textContent = tag.tags.artist
                        document.querySelector('.song__details_singer-name').textContent = tag.tags.artist
                        document.querySelector('.song__details_genre-name').textContent = tag.tags.genre
                        document.querySelector('.song__details_date-released_year').textContent = window.moment(tag.tags.year).format('YYYY')
        
        
                    }
                    
                    catch(error){
        
                        if(tag.tags.hasOwnProperty('picture')){
                            if(tag.tags.picture.description === ""){
                                document.querySelector(".music__img").style.backgroundImage = 'url(./assets/img/music.png)';
                                const faviconLink = document.querySelector('#faviconImage');
    
                                faviconLink.href = './assets/img/music.png';
            
                            }
        
                        }else{
                            console.log('Some data not founded')
                            
                            
                        }
                        document.querySelector(".music__img").style.backgroundImage = 'url(./assets/img/music.png)';
                        const faviconLink = document.querySelector('#faviconImage');
    
                        faviconLink.href = './assets/img/music.png';
                        document.querySelector(".music__title-name").textContent = file.name.slice(0, -4);
                        document.title = file.name.slice(0, -4);
                        document.querySelector(".song__album-name").textContent =  `Unknown Album`;
                        document.querySelector('.song__details_artist-name').textContent = `Unknown Artist`
                        document.querySelector('.song__details_singer-name').textContent = `Unknown Singer`
                        document.querySelector('.song__details_genre-name').textContent = `Unknown Genre`
                        document.querySelector('.song__details_date-released_year').textContent = window.moment(tag.tags.year).format('YYYY')
        
                    }
                }else{

                    try{
                        const data = tag.tags.picture.data
                        const format = tag.tags.picture.format
                        let base64String = ""
                        for(let i = 0; i < data.length; i++){
                            base64String += String.fromCharCode(data[i])
                        }
                        if(tag.tags.hasOwnProperty('picture')){
                            if(tag.tags.picture.description === ""){
                                document.querySelector(".music__img").style.backgroundImage = 'url(./assets/img/music.png)';
    
                                const faviconLink = document.querySelector('#faviconImage');
    
                                faviconLink.href = './assets/img/music.png';
            
                            }else{
            
                                document.querySelector('.music__img').style.backgroundImage = 'url(data:'+format+';base64,'+window.btoa(base64String)+')'
                                const faviconLink = document.querySelector('#faviconImage');
    
                                faviconLink.href = 'data:'+format+';base64,'+window.btoa(base64String)+'';
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
                                    const faviconLink = document.querySelector('#faviconImage');
        
                                    faviconLink.href = './assets/img/music.png';
                
                                }else{
                
                                    document.querySelector('.music__img').style.backgroundImage = 'url(data:'+format+';base64,'+window.btoa(base64String)+')'
                                    const faviconLink = document.querySelector('#faviconImage');
        
                                    faviconLink.href = 'data:'+format+';base64,'+window.btoa(base64String)+'';
                                }
            
                            }else{
                                console.log('Some data not founded')
                                
                                
                            }
                            document.querySelector(".music__img").style.backgroundImage = 'url(./assets/img/music.png)';
                            const faviconLink = document.querySelector('#faviconImage');
        
                            faviconLink.href = './assets/img/music.png';
                            document.querySelector(".music__title-name").textContent = file.name.slice(0, -4);
                            document.title = file.name.slice(0, -4);
        
                            if(tag.tags.hasOwnProperty('TALB')){

                                document.querySelector(".song__album-name").textContent = tag.tags.album;
                                // document.querySelector('.song__details_artist-name').textContent = tag.tags.TPE2.data
                                // document.querySelector('.song__details_singer-name').textContent = tag.tags.TPE1.data
                                // document.querySelector('.song__details_genre-name').textContent = tag.tags.TCON.data
                                // document.querySelector('.song__details_date-released_year').textContent = tag.tags.TDRC.data

                            }else{
                                document.querySelector(".song__album-name").textContent = 'Unknown Album'
                                // document.querySelector('.song__details_artist-name').textContent = 'Unknown Artist'
                                // document.querySelector('.song__details_singer-name').textContent = 'Unknown Singer'
                                // document.querySelector('.song__details_genre-name').textContent = 'Unknown Genre'
                                // document.querySelector('.song__details_date-released_year').textContent = 'Unknown Year'
                            }

                            if(tag.tags.hasOwnProperty('TPE2')){

                                // document.querySelector(".song__album-name").textContent = tag.tags.album;
                                document.querySelector('.song__details_artist-name').textContent = tag.tags.TPE2.data
                                // document.querySelector('.song__details_singer-name').textContent = tag.tags.TPE1.data
                                // document.querySelector('.song__details_genre-name').textContent = tag.tags.TCON.data
                                // document.querySelector('.song__details_date-released_year').textContent = tag.tags.TDRC.data

                            }else{
                                // document.querySelector(".song__album-name").textContent = 'Unknown Album'
                                document.querySelector('.song__details_artist-name').textContent = 'Unknown Artist'
                                // document.querySelector('.song__details_singer-name').textContent = 'Unknown Singer'
                                // document.querySelector('.song__details_genre-name').textContent = 'Unknown Genre'
                                // document.querySelector('.song__details_date-released_year').textContent = 'Unknown Year'
                            }

                            if(tag.tags.hasOwnProperty('TPE1')){

                                // document.querySelector(".song__album-name").textContent = tag.tags.album;
                                // document.querySelector('.song__details_artist-name').textContent = tag.tags.TPE2.data
                                document.querySelector('.song__details_singer-name').textContent = tag.tags.TPE1.data
                                // document.querySelector('.song__details_genre-name').textContent = tag.tags.TCON.data
                                // document.querySelector('.song__details_date-released_year').textContent = tag.tags.TDRC.data

                            }else{
                                // document.querySelector(".song__album-name").textContent = 'Unknown Album'
                                // document.querySelector('.song__details_artist-name').textContent = 'Unknown Artist'
                                document.querySelector('.song__details_singer-name').textContent = 'Unknown Singer'
                                // document.querySelector('.song__details_genre-name').textContent = 'Unknown Genre'
                                // document.querySelector('.song__details_date-released_year').textContent = 'Unknown Year'
                            }

                            if(tag.tags.hasOwnProperty('TCON')){

                                // document.querySelector(".song__album-name").textContent = tag.tags.album;
                                // document.querySelector('.song__details_artist-name').textContent = tag.tags.TPE2.data
                                // document.querySelector('.song__details_singer-name').textContent = tag.tags.TPE1.data
                                document.querySelector('.song__details_genre-name').textContent = tag.tags.TCON.data
                                // document.querySelector('.song__details_date-released_year').textContent = tag.tags.TDRC.data

                            }else{
                                // document.querySelector(".song__album-name").textContent = 'Unknown Album'
                                // document.querySelector('.song__details_artist-name').textContent = 'Unknown Artist'
                                // document.querySelector('.song__details_singer-name').textContent = 'Unknown Singer'
                                document.querySelector('.song__details_genre-name').textContent = 'Unknown Genre'
                                // document.querySelector('.song__details_date-released_year').textContent = 'Unknown Year'
                            }

                            if(tag.tags.hasOwnProperty('TDRC')){

                                // document.querySelector(".song__album-name").textContent = tag.tags.album;
                                // document.querySelector('.song__details_artist-name').textContent = tag.tags.TPE2.data
                                // document.querySelector('.song__details_singer-name').textContent = tag.tags.TPE1.data
                                // document.querySelector('.song__details_genre-name').textContent = tag.tags.TCON.data
                                document.querySelector('.song__details_date-released_year').textContent = tag.tags.TDRC.data

                            }else if((tag.tags.hasOwnProperty('TYER'))){
                                document.querySelector('.song__details_date-released_year').textContent = tag.tags.TYER.data

                            }else{
                                // document.querySelector(".song__album-name").textContent = 'Unknown Album'
                                // document.querySelector('.song__details_artist-name').textContent = 'Unknown Artist'
                                // document.querySelector('.song__details_singer-name').textContent = 'Unknown Singer'
                                // document.querySelector('.song__details_genre-name').textContent = 'Unknown Genre'
                                document.querySelector('.song__details_date-released_year').textContent = 'Unknown Year'
                            }

                            



                        }
        
                    
                }
                
    
            },
            onError: function(error) {
                document.querySelector(".music__img").style.backgroundImage = 'url(./assets/img/music.png)';
                const faviconLink = document.querySelector('#faviconImage');
                faviconLink.href = './assets/img/music.png';

                document.querySelector(".music__title-name").textContent = 'Song Title';
                document.title = 'Jo__Sound__Visualizer';

                document.querySelector(".song__album-name").textContent = 'Unknown Album'
                document.querySelector('.song__details_artist-name').textContent = 'Unknown Artist'
                document.querySelector('.song__details_singer-name').textContent = 'Unknown Singer'
                document.querySelector('.song__details_genre-name').textContent = 'Unknown Genre'
                document.querySelector('.song__details_date-released_year').textContent = 'Unknown Year'
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
 
   if(volumePopupvalue.textContent === '0'){
        document.querySelector('.volumeTrack').classList.remove('ri-volume-up-line')
        document.querySelector('.volumeTrack').classList.remove('ri-volume-down-line')

        document.querySelector('.volumeTrack').classList.add('ri-volume-mute-line')

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: 'Volume Got Muted'
          })

        changeVolume()

        

    }else if((parseInt(volumePopupvalue.textContent) <= 48) && (parseInt(volumePopupvalue.textContent) >= -1)){
        document.querySelector('.volumeTrack').classList.remove('ri-volume-mute-line')
        document.querySelector('.volumeTrack').classList.remove('ri-volume-up-line')
        document.querySelector('.volumeTrack').classList.add('ri-volume-down-line')
        changeVolume()
        
    }else if(volumePopupvalue.textContent === '100'){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: 'Volume Got Maximum '
          })
        changeVolume()

    }else{
       
            document.querySelector('.volumeTrack').classList.remove('ri-volume-mute-line')
            document.querySelector('.volumeTrack').classList.remove('ri-volume-down-line')
            
            document.querySelector('.volumeTrack').classList.add('ri-volume-up-line')
            changeVolume()
            
    }
    }
    const volumeBtn = document.querySelector('.volumeTrack')
    const volumePopup = document.querySelector('.rs-range')
    const volumePopupvalue = document.querySelector('.rs-label')
    
    function showvolume(){
        volumeBtn.classList.add('unactive')
        volumePopup.style.transform = 'scale(1)'
       
     
}

function hidevolume(){
    volumeBtn.classList.remove('unactive')
    volumePopup.style.transform = 'scale(0)'
   
}

volumeBtn.addEventListener("click", ()=> {
    if(volumeBtn.classList.contains('unactive')){
        volumeBtn.classList.remove('unactive')
        volumePopup.classList.remove('faded__volume')
        volumePopupvalue.classList.remove('faded__volume')
        volumeBtn.style.transform = 'scale(1)'
        volumeBtn.style.opacity = '1'


        

        
    }else{
        volumeBtn.classList.add('unactive')
        volumePopup.classList.add('faded__volume')
        volumePopupvalue.classList.add('faded__volume')
        volumeBtn.style.transform = 'scale(.81)'
        volumeBtn.style.opacity = '.6'




    }

  
   
    

})






document.addEventListener('click', function(e){
    let inside = (e.target.closest('#range-slide'));
    if(document.querySelector('.rs-label').classList.contains('faded__volume')){
        if(!inside){
            volumeBtn.classList.remove('unactive')
            volumePopup.classList.remove('faded__volume')
            volumePopupvalue.classList.remove('faded__volume')
            volumeBtn.style.transform = 'scale(1)'
            volumeBtn.style.opacity = '1'

            
        
            

          
        }

    }
  });


const volumeSlider = document.querySelector('.volume-slider')
volumeSlider.addEventListener('click', changeVolume)


function changeVolume(){
    let volumeValueChange = volumePopupvalue.textContent
    
    audio1.volume = volumeValueChange / 100
   
}

volumeSlider.addEventListener('change', changeVolume)
volumeSlider.addEventListener('drag', changeVolume)


function changeVolume(){
    let volumeValueChange = volumePopupvalue.textContent
    audio1.volume = volumeValueChange / 100
}

window.addEventListener('keydown', e=> {
    
    if(e.key === 'ArrowUp'){
        let volumePrevious = (volumePopupvalue.textContent)
        let volumeIncrese = parseInt(volumePrevious)+1
        if(volumeIncrese <= 100){
            rangeSlider.value = volumeIncrese
            var bulletPosition = (rangeSlider.value /rangeSlider.max);
            rangeBullet.style.left = (bulletPosition * 150) + "px";

            volumePopupvalue.textContent = volumeIncrese.toString()
            showSliderValue()
            changeVolume()
     

        }
         
        
    }else if(e.key === 'ArrowDown'){

        let volumePrevious = (volumePopupvalue.textContent)
        let volumeDecrese = parseInt(volumePrevious)-1
        
        if(volumeDecrese >= 0){

    
            rangeSlider.value = volumeDecrese
            var bulletPosition = (rangeSlider.value /rangeSlider.max);
            rangeBullet.style.left = (bulletPosition * 150) + "px";
    
            volumePopupvalue.textContent = volumeDecrese.toString()
            showSliderValue()
            changeVolume()
            
            
           
        }
        
        
        
    }
  
})

window.addEventListener('load', function(){
    showSliderValue()
    changeVolume()
})

function fileValidation() {
    
    var fileInput =
        document.getElementById('songUpload');
     
    var filePath = fileInput.value;
 
    // Allowing file type
    var allowedExtensions =
/(\.mp3|\.wav|\.mp4)$/i;
     
    if (!allowedExtensions.exec(filePath)) {
       
        swalhat()
        
    }
}

function swalhat(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'File Not Supported, Please Upload only Audio Files'
      })
    
}

const canvas = document.getElementById('canvas1')
const musicPlayer = document.querySelector('.music__container')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let marginNet = window.innerHeight * 0.36
musicPlayer.style.marginTop = `${-marginNet}px`

function resizeFn(){
    canvas.width = window.innerWidth

    canvas.height = window.innerHeight
    let marginNet = window.innerHeight * .36
    musicPlayer.style.marginTop = `${-marginNet}px`
}

window.addEventListener('resize', resizeFn)
const ctx = canvas.getContext('2d')
ctx.lineCap = 'square'
ctx.shadowOffsetX = 15
ctx.shadowOffsetY = 10
ctx.shadowBlur = 5
ctx.shadowColor = 'black'
let audioSource
let analyser

function visualizer(){
    const files =  this.files

    const audioContext = new AudioContext()
    // audio1.src = URL.createObjectURL(files[0])
    
    if(!audioSource){
        audioSource = audioContext.createMediaElementSource(audio1);
        analyser = audioContext.createAnalyser();
        audioSource.connect(analyser);
        analyser.connect(audioContext.destination);
    }
    analyser.fftSize =256
    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    const barWidth = 15
    let barHeight
    let x

    function animate(){
        x = 0
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        analyser.getByteFrequencyData(dataArray)
        drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray)
        requestAnimationFrame(animate)
    }
    animate()
}

function drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray){
    
    for(let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i] 
        ctx.save()
        ctx.translate(canvas.width/2, canvas.height/2)
        ctx.rotate(i  * 6)
        ctx.lineWidth = barHeight/4
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, barHeight)
        ctx.stroke()

        ctx.lineWidth = barHeight/5
        let hue = 150 + i * 3
        ctx.strokeStyle = 'rgba(' + hue + ', 150, 50, 1)'
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, barHeight)
        ctx.stroke()
        // ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)' 
        // ctx.fillRect(0, 0, barWidth, barHeight)
        x += barWidth
        ctx.restore()
    }

    for(let i = bufferLength; i < 20; i--){
        barHeight = dataArray[i] > 80 ? dataArray[i] : 80
        ctx.save()
        ctx.translate(canvas.width/2, canvas.height/2)
        ctx.rotate(i * 3)
        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.arc(0, barHeight * 3.5, barHeight/3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(' + hue + ', 150, 150, 1)'

        ctx.fill()
        ctx.stroke()
        ctx.restore()
    }

}


const fullscreenMode = document.querySelector('.fullscreen__mode')
function requestFullScreen(element) {
    element = document.body
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
    let marginNet = window.innerHeight * .28
    musicPlayer.style.marginTop = `${-marginNet}px`
}



function cancelFullScreen(element) {
    element = document
    // Supports most browsers and their versions.
    var requestMethod = element.exitFullscreen || element.webkitExitFullscreen || element.mozCancelFullScreen || element.msExitFullscreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
    let marginNet = window.innerHeight * .36
    musicPlayer.style.marginTop = `${-marginNet}px`
}

// var elem = document.body; // Make the body go full screen.
fullscreenMode.addEventListener('click', ()=> {
       
    fullscreenChecker()

    
})

function fullscreenChecker(){
    if(!fullscreenMode.classList.contains('fullscreen__active')){
        fullscreenMode.classList.add('fullscreen__active')
        fullscreenMode.classList.remove('ri-fullscreen-line')
        fullscreenMode.classList.add('ri-fullscreen-exit-line')
        
        requestFullScreen()

    }else if(fullscreenMode.classList.contains('fullscreen__active')){
        fullscreenMode.classList.remove('fullscreen__active')
        fullscreenMode.classList.remove('ri-fullscreen-exit-line')
        fullscreenMode.classList.add('ri-fullscreen-line')
        cancelFullScreen()

    }
}

window.addEventListener('keydown', (e)=> {
    if(e.key === 'f' || e.key === 'F' || e.key === 'F11' || e.key === 'Escape'){
        fullscreenChecker()
    }
})

window.onbeforeunload = function () {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3690,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'info',
        title: 'Window Close Event Cancelled'
    })
    return 'Are You Sure To Leave ? ';
}
var widths = [0, 870, 3840];

function resizeFns() {
    if (window.innerWidth<widths[1]) {
       
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            confirmButtonColor: 'red',
            
            confirmButtonText: 'Close',
            text: 'Your Screen Size must be greator than 870px to run the Visualizer',
            footer: 'Please Try on a device whose width Greator than 870px '
          }).then((result) => {
            if (result.isConfirmed) {
              window.close()
            }
          })
        

        document.querySelector('.canvas').style.transform = 'scale(0)'
        document.querySelector('.music__container').style.transform = 'scale(0)'

      




    }else{

        shortcuts()
        document.querySelector('.canvas').style.transform = 'scale(1)'
        document.querySelector('.music__container').style.transform = 'scale(1)'
    }
}

window.onload = resizeFns;
resizeFns();

function shortcuts(){


    Swal.fire({
        title: 'Keyboard Shortcuts',
        html:
    'Press <b>`P/p`</b> to <b><em>Play/Pause</em></b> <br>' +
    ' Press <b>`R/r`</b> to toggle <b><em>Repeat Mode</em></b><br>' +
    'Press <b>`F/f`</b> to toggle <b><em>Full-Screen Mode</em></b><br>' + 
    'Control <b><em>Audio Level</em></b> via <b><em>`Arrow Up and Down Keys`</em></b><br' ,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

      document.querySelector('.swal2-popup').style.background = '#1b1a1a'
      document.querySelector('.swal2-popup').style.color = 'white'
    
}