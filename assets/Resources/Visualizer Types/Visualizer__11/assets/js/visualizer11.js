const container = document.getElementById('container')
const canvas = document.getElementById('canvas1')
const file = document.getElementById('fileupload')
const audio1 = document.getElementById('audio1')

canvas.width = window.innerWidth
canvas.height = window.innerHeight


// context = context || new AudioContext();
// source = source || context.createMediaElementSource(audio);

const ctx = canvas.getContext('2d')
ctx.shadowOffsetX = 0
ctx.shadowOffsetY = 0
ctx.shadowColor = 'gold'
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
    analyser.fftSize = 128
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
ctx.lineWidth = 3
function drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray){
    
    for(let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i]
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