const picture = document.querySelector("div.container img")
const botonCamera = document.querySelector("button")
//const filePicture = document.querySelector("input[type=file]")
//es igual que lo siguiente, pero lo siguiente está mejor enlasado
const filePicture = document.createElement("input")
//este es el elemento html que cambiamos a js
filePicture.type = "file"
filePicture.id = "inputCamera"
filePicture.cature = "environment"
filePicture.accept = ".png, .jpg, .webp, .gif" 

botonCamera.addEventListener("click", ()=> filePicture.click())

filePicture.addEventListener("change", ()=> {
    console.clear()
    console.log(filePicture.files[0])

    const objectURL = URL.createObjectURL(filePicture.files[0])
    picture.src= objectURL
    console.log(objectURL)

    //CONVERTIR A BASE64
    //para subir un archivo a un servidor web (de backend)
    const reader = new FileReader()
    reader.readAsDataURL(filePicture.files[0])

    reader.addEventListener("error", ()=> {
        console.log("Se produjo un error inesperado", error)
    })

    reader.addEventListener("load", ()=> {
        const base64String = reader.result
        console.log(base64String)
    })

    

})
