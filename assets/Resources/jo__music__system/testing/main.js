const mediaTags = document.querySelector('#media-tags');
var input = document.querySelector('input');
const canvas = document.getElementById('canvas1')
const audio1 = document.getElementById('audio')

    
    // const ctx = canvas.getContext('2d')
    // ctx.shadowOffsetX = 0
    // ctx.shadowOffsetY = 0
    // ctx.shadowColor = 'gold'
    // let audioSource
    // let analyser

var songUpload = document.querySelector('#songUpload');

songUpload.addEventListener("change", (event) => {
    var files = event.target.files;
    document.getElementById("src").setAttribute("src", URL.createObjectURL(files[0]));
    document.getElementById("audio").load();
    console.log(files)

    // const audioContext = new AudioContext()
    // audio1.src = URL.createObjectURL(files[0])
    // audio1.load()
    // audio1.play()
    // if(!audioSource){
    //     audioSource = audioContext.createMediaElementSource(audio1);
    //     analyser = audioContext.createAnalyser();
    //     audioSource.connect(analyser);
    //     analyser.connect(audioContext.destination);
    // }
    // analyser.fftSize = 64
    // const bufferLength = analyser.frequencyBinCount
    // const dataArray = new Uint8Array(bufferLength)

    // const barWidth = 15
    // let barHeight
    // let x

    // function animate(){
    //     x = 0
    //     ctx.clearRect(0, 0, canvas.width, canvas.height)
    //     analyser.getByteFrequencyData(dataArray)
    //     drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray)
    //     requestAnimationFrame(animate)
    // }
    // animate()
})



input.addEventListener("change", (event) => {
  var file = event.target.files[0];
  jsmediatags.read(file, {
    onSuccess: function(tag) { 
    try{ 
      
      console.log((tag))
      // Array buffer to base64
      const data = tag.tags.picture.data;
      const format = tag.tags.picture.format;
      let base64String = "";
      for (let i = 0; i < data.length; i++) {
          base64String += String.fromCharCode(data[i]);
      }
      document.getElementById("cover").style.backgroundImage = 'url(data:'+format+';base64,'+window.btoa(base64String)+')';
      document.getElementById("title").textContent = tag.tags.title;
      document.getElementById("artist").textContent = tag.tags.artist;
      document.getElementById("album").textContent = tag.tags.album;
    }catch(error){
      console.log(error);
      document.getElementById("cover").style.backgroundImage = 'url(music.png)';
      document.getElementById("title").textContent = `${document.getElementById("songUpload").value.split(/(\\|\/)/g).pop()}`;
      document.getElementById("artist").textContent = 'Unknown';
      document.getElementById("album").textContent = 'Unknown';
    }
    
  },
  onError: function(error) {
    console.log(error);
    document.getElementById("cover").style.backgroundImage = 'url(music.png)';
    document.getElementById("title").textContent = `${document.getElementById("songUpload").value.split(/(\\|\/)/g).pop()}`;
    document.getElementById("artist").textContent = 'Unknown';
    document.getElementById("album").textContent = 'Unknown';
  }
  })
})

// ctx.lineWidth = 3
function drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray){
    
    for(let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i] * 0.6
        ctx.save()
        ctx.translate(canvas.width/2, canvas.height/2)
        ctx.rotate(i * 2.2)
        ctx.shadowBlur = 50
        const hue = 190 + i * barHeight/15
        ctx.strokeStyle = 'hsl(' + hue + ', 100%, 50%)' 
        ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)'
        ctx.lineWidth = barHeight/20 > 0.2 ? barHeight/20 : 0.2
        ctx.beginPath()
        ctx.arc(barHeight + 75, barHeight + 75, 50, 0, Math.PI * 2)
        ctx.moveTo(barHeight + 110, barHeight + 75)
        ctx.arc(barHeight + 75, barHeight + 75, 35, 0, Math.PI)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(barHeight + 65, barHeight + 65)
        ctx.arc(barHeight + 60, barHeight + 65, 5, 0, Math.PI * 2)
        ctx.moveTo(barHeight + 95, barHeight + 65)
        ctx.arc(barHeight + 90, barHeight + 65, 5, 0, Math.PI * 2)
        ctx.fill()
        x += barWidth
       
        ctx.restore()

    }

}