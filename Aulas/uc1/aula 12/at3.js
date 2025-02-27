class Televisao{
    constructor(canaAtual,volume){
        this.canaAtual= canaAtual
        this.volume= volume

    }
    // metodo

    aumentarVolume(maisVolume){
        this.volume += maisVolume
    }
    detail(){
        document.write(this.canaAtual)
        document.write(this.volume)
    }
}

tv = new Televisao (5, 10)
tv.detail()
tv.aumentarVolume(20)
tv.detail()