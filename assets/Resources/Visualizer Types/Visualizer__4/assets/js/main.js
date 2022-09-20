const container = document.getElementById('container')
const canvas = document.getElementById('canvas1')
const file = document.getElementById('fileupload')
const audio1 = document.getElementById('audio1')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// context = context || new AudioContext();
// source = source || context.createMediaElementSource(audio);

const ctx = canvas.getContext('2d')
ctx.lineCap = 'round'
ctx.shadowOffSetX = 0
ctx.shadowOffSetY = 0
ctx.shadowBlur = 20
ctx.shadowColor = 'gold'
// ctx.globalCompositeOperation = 'xor' making cpu extensive high
let audioSource
let analyser

container.addEventListener('click', function(){
    const audio1 = document.getElementById('audio1')
    audio1.src = 'data:audio/x-wav;base64,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'
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

function drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray){
    
    for(let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i] * 1.2
        ctx.save()
        ctx.translate(canvas.width/2, canvas.height/2)
        ctx.rotate(i * bufferLength / 1.2)
        const hue = 200 * i * 5
        ctx.lineWidth = 12
        ctx.strokeStyle = 'hsl(' + hue + ',100%, 50%)' 
        ctx.beginPath()
        ctx.moveTo(0, barHeight/1.1)
        ctx.lineTo(barHeight/1.1, barHeight)
        ctx.stroke()
        x += barWidth
        ctx.restore()
    }

}