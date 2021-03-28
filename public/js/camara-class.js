

class Camara {

    constructor(videoNode){

        this.videoNode = videoNode
        console.log('camara init')
    }

    encender(){

        if(navigator.mediaDevices){
            navigator.mediaDevices.getUserMedia({
                audio:false,
                video: {width:300,height:300}
            })
            .then(stream =>{

                this.videoNode.srcObject = stream
                this.stream = stream

            })
        }

    }

    apagar(){

        this.videoNode.pause()

        if(this.stream){
            this.stream.getTracks()[0].stop()
        }


    }

    tomarFoto(){

        //crear un elemento canvas para renderizar la foto
        let canvas = document.createElement('canvas')

        //dimensiones de canvas
        canvas.setAttribute('width',300)
        canvas.setAttribute('heigth',300)

        //obtener el contexto del canvas
        let context = canvas.getContext('2d') //simple imagen

        //dibujar la imagen dentro del canvas
        context.drawImage(this.videoNode, 0,0,canvas.width,canvas.height)

        //extraer imagen
        this.foto= context.canvas.toDataURL()

        //limpieza general
        canvas = null;
        context = null;

        return this.foto
    }

}


