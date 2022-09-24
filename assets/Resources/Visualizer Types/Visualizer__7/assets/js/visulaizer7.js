const container = document.getElementById('container')
const canvas = document.getElementById('canvas1')
const file = document.getElementById('fileupload')
const audio1 = document.getElementById('audio1')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// context = context || new AudioContext();
// source = source || context.createMediaElementSource(audio);

const ctx = canvas.getContext('2d')
ctx.shadowOffsetX = 5
ctx.shadowOffsetY = 5
ctx.shadowBlur = 0
ctx.shadowColor = 'white'
let audioSource
let analyser

container.addEventListener('click', function(){
    const audio1 = document.getElementById('audio1')
    audio1.src = './assets/sounds/test.mp3'
    const audioContext = new AudioContext()
    audio1.play()
    if(!audioSource){
        audioSource = audioContext.createMediaElementSource(audio1);
        analyser = audioContext.createAnalyser();
        audioSource.connect(analyser);
        analyser.connect(audioContext.destination);
    }
    analyser.fftSize = 64
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
})


file.addEventListener('change', function(){
    const files =  this.files

    const audioContext = new AudioContext()
    audio1.src = URL.createObjectURL(files[0])
    audio1.load()
    audio1.play()
    if(!audioSource){
        audioSource = audioContext.createMediaElementSource(audio1);
        analyser = audioContext.createAnalyser();
        audioSource.connect(analyser);
        analyser.connect(audioContext.destination);
    }
    analyser.fftSize = 64
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
})

function drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray){
    
    for(let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i] * 1.5
        ctx.save()
        ctx.translate(canvas.width/2, canvas.height/2)
        ctx.rotate(i * 8.1)
        const hue = i * 3
        ctx.strokeStyle = 'hsl(' + hue + ',100%,' + barHeight/3 + '%)' 
        ctx.font = dataArray[i] + 'px Helvetica'
        ctx.fillText('J', 40, barHeight * 1.3)
        ctx.strokeText('J', 40, barHeight * 1.3)
        x += barWidth
        ctx.restore()
    }
    const fontSize = dataArray[15] * 3
    ctx.font = fontSize + 'px Helvetica'
    ctx.fillText('J', canvas.width/2 - fontSize/3, canvas.height/2 - fontSize/3)
    ctx.strokeText('J', canvas.width/2 - fontSize/3, canvas.height/2 - fontSize/3)

}

// 16:53