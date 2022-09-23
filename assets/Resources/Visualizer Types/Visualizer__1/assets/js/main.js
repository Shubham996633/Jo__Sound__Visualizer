const container = document.getElementById('container')
const canvas = document.getElementById('canvas1')
const file = document.getElementById('fileupload')
const audio1 = document.getElementById('audio1')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// context = context || new AudioContext();
// source = source || context.createMediaElementSource(audio);

const ctx = canvas.getContext('2d')
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
    analyser.fftSize = 2048
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
    analyser.fftSize = 2048
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
        barHeight = dataArray[i] * 2.5
        ctx.save()
        ctx.translate(canvas.width/2, canvas.height/2)
        ctx.rotate(i * 4.184)
        const hue = 120 + i * .3
        ctx.fillStyle = 'hsl(' + hue + ', 100%,50%)'
        ctx.beginPath()
        ctx.arc(10, barHeight/2, barHeight/2, 0, Math.PI / 4)

        ctx.fill()
        ctx.stroke()
        x += barWidth
        ctx.restore()
    }

}

