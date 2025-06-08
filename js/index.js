const videos = [
    { speed: "4g", video: "media/video-1920_1080_30fps.mp4", tag: "Video High Quality" },
    { speed: "3g", video: "media/video-960_540_30fps.mp4", tag: "Video Medium Quality" },
    { speed: "2g", video: "media/video-426_240_30fps.mp4", tag: "Video Standard Quality" }
]

const video = document.querySelector("video")
const videoTag = document.querySelector("p#videoName")

function cargarVideo() {
    const speed = navigator.connection.effectiveType
    const media = videos.find((video) => video.speed === speed)

    videoTag.textContent = media.tag
    video.src = media.video
    //video.play()
}



cargarVideo()

navigator.connection.addEventListener("change", ()=> {
    console.log(navigator.connection.effectiveType)
})

navigator.connection.addEventListener("change", ()=> {
    cargarVideo()
})

video.addEventListener("timeupdate", () => {
    console.log(video.currentTime) //con esto podríamos controlar en que momento del video la conección mejora
})

// //const audio = document.createElement("audio")
// const audio = new Audio()

// audio.src = "media/mi-musica.mp3"
// audio.currentTime //nos permite ver el tiempo transcurrido en segundos
// audio.play()
// audio.pause()
// audio.addEventListener("timeupdate", () => {
//     //obtenerTiempo(audio.currentTime) // convierte segs. en hh:mm:ss
// })
// audio.addEventListener("play", ()=> {
//     //manejar eventos de play
// })

// audio.addEventListener("pause", ()=> {
//     //manejar eventos de pausa
// })

// audio.addEventListener("playing", () => {
//     //detectar si se está reproduciendo un audio
// })
