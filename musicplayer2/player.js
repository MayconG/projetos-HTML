//nesse objeto está guardado os estados, funcionalidades e configurações do player
//esse outro arquivo é só um codego melhorado do arquivo 1

const player = {

    /*aqui a gente só a pegando os elementos do html e nos outros arquivos para poder manipular o DOM*/
    cover: document.querySelector('.card-image'),
    titulo: document.querySelector('#titu'),
    artista: document.querySelector('#artista'),
    audio: document.querySelector('audio'),
    play_pause: document.querySelector('#play'),
    mute: document.querySelector('#bt-volume'),
    volume: document.querySelector('#range-volume'),
    seekbar: document.querySelector('#duração'),
    total: document.querySelector('#total'),
    restante: document.querySelector('#restante'),
    menagem: document.querySelector('#mensagem'),
    ciclo: document.querySelector('#ciclo'),
    botão_ciclo: document.querySelector('#ciclo_btn'),

    audios: Audio,
    currentAudio: {},
    currentplay: 0,

    /*essa é a função que carrega as imagens, textos e os audios*/
    iniciar() {
        this.update()
        this.audio.onended = () => this.next()
    },

    /*essa função é que vai passar para a proxima musica*/
    next() {
        if (this.botão_ciclo.innerHTML === 'repeat') {
            this.currentplay++

            if (this.currentplay == this.audios.length) { this.restart() }
            this.update()
            this.audio.play()
        } else if (this.botão_ciclo.innerHTML === 'repeat_one') {
            this.audio.play()
        } else {
            this.currentplay = Math.floor(Math.random() * this.audios.length)
            this.update()
            this.audio.play()
        }
    },

    avançar() {
        this.currentplay++
        if (this.ciclo.innerText === 'repeat' || this.ciclo.innerText === 'repeat_one') {
            if (this.currentplay === this.audios.length) {
                this.restart()
                this.audio.play()
                this.play_pause.innerHTML = 'pause'
            } else {
                this.update()
                this.audio.play()
                this.play_pause.innerHTML = 'pause'
            }
        } else if (this.ciclo.innerText === 'shuffle') {
            this.currentplay = Math.floor(Math.random() * this.audios.length)
            this.update()
            this.audio.play()
            this.play_pause.innerHTML = 'pause'
        }
    },

    voltar() {
        this.currentplay--
        if (this.currentplay === -1) {
            this.currentplay = 0
            this.audio.play()
        }else {
            this.update()
            this.audio.play()
            this.play_pause.innerHTML = 'pause'
        }
    },

    playpause() {
        if (this.play_pause.textContent === 'play_arrow') {
            this.audio.play()
            this.play_pause.innerText = 'pause'
        } else {
            this.audio.pause()
            this.play_pause.innerHTML = 'play_arrow'
        }
    },

    mudar_ciclo() {
        if (this.botão_ciclo.innerHTML === 'repeat') {
            this.botão_ciclo.innerHTML = 'repeat_one'
            this.menagem.textContent = 'ciclo único'

        } else if (this.botão_ciclo.innerHTML === 'repeat_one') {
            this.botão_ciclo.innerHTML = 'shuffle'
            this.menagem.textContent = 'aléatorio'
        } else {
            this.botão_ciclo.innerHTML = 'repeat'
            this.menagem.textContent = 'ciclo da lista'
        }
    },

    mutar() {
        this.audio.muted = !this.audio.muted
        this.mute.textContent = this.audio.muted ? 'volume_off' : 'volume_up'
    },

    aume_dimi() {
        this.valvol(this.volume.value)
    },

    valvol(val) {
        this.audio.volume = val / 100
        this.mute.textContent = this.audio.volume === 0 ? 'volume_off' : 'volume_up'
    },

    sectomin(time) {
        const minutos = Math.floor(time / 60)
        const segundos = Math.floor(time % 60)
        return `${("0" + minutos).slice(-2)}:${("0" + segundos).slice(-2)}`
    },

    timeupdate() {
        this.restante.innerText = this.sectomin(this.audio.currentTime)
        this.seekbar.value = this.audio.currentTime
    },

    setseek(val) {
        this.audio.currentTime = val
    },

    seekb() {
        this.setseek(this.seekbar.value)
    },

    /*essa função que está quardado as imagens, textos e audios que vão aparecer*/
    update() {
        this.currentAudio = this.audios[this.currentplay]

        this.cover.style.background = `url('${this.currentAudio.cover}') no-repeat center center / cover`
        this.titulo.innerText = this.currentAudio.titulo
        this.artista.innerText = this.currentAudio.artista
        this.audio.src = this.currentAudio.file
        this.audio.onloadeddata = () => {
            this.seekbar.max = this.audio.duration
            this.total.innerText = this.sectomin(this.audio.duration)
            this.audio.ontimeupdate = () => this.timeupdate()
        }
    },
    
    /*essa é a função que vai fazer a musica voltar para a primeira*/
    restart() {
        this.currentplay = 0
        this.update()
    },
}