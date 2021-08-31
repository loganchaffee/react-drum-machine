import React from 'react'

export default class DrumPad extends React.Component {
    constructor(props){
        super(props) 
        this.playSound = this.playSound.bind(this)
    }

    componentDidMount() {
        document.body.addEventListener('keydown', (e) => {
            if (e.key === this.props.triggerKey) {
                this.playSound()
            }
        })
    }
    
    playSound() {
        const audio = document.getElementById(this.props.audioId)  
        const pad = document.getElementById(this.props.id)
        pad.classList.toggle("active");
        setTimeout(() => {
            pad.classList.toggle("active");
        }, 100);
        audio.currentTime = 0
        audio.play()
        this.props.parentCallback(this.props.id)
    }

    render() {
        
        return (
            <div className='drum-pad'
                id={this.props.id} 
                onClick={this.playSound} 
            >
                <audio id={this.props.audioId} src={this.props.src}></audio>
                <p>{this.props.triggerKey}</p>
            </div>
        )
    }
}