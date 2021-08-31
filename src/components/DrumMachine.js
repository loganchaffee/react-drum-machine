import React from 'react'
import DrumPad from './DrumPad'
import Display from './Display'

import clap from'../sounds/clap.wav'
import highHat from'../sounds/high-hat.wav'
import crash from'../sounds/crash.wav'
import midTom from'../sounds/high-tom.wav'
import highTom from'../sounds/highest-tom.wav'
import kick from'../sounds/kick.wav'
import lowTom from'../sounds/low-tom.wav'
import snare from'../sounds/snare.wav'
import woodBlock from'../sounds/wood-block.wav'

export default class DrumMachine extends React.Component {
    constructor(props) {
        super(props)
        this.handleDisplay = this.handleDisplay.bind(this)
        this.state = {
            currentSound: ''
        }
    }

    handleDisplay(soundName) {
        this.setState({
            currentSound: soundName
        })
    }


    render() {
        return (
            <div className='drum-machine' id='drum-machine'>

                <div className='drum-pad-container'>
                    <DrumPad
                        id='Crash'
                        audioId='crashAudio'
                        triggerKey='q'
                        src={crash}
                        parentCallback={this.handleDisplay}
                    />
                    <DrumPad
                        id='Wood Block'
                        audioId='woodBlockAudio'
                        triggerKey='w'
                        src={woodBlock}
                        parentCallback={this.handleDisplay}
                    />
                    <DrumPad
                        id='Clap'
                        audioId='clapBlockAudio'
                        triggerKey='e'
                        src={clap}
                        parentCallback={this.handleDisplay}
                    />
                    <DrumPad
                        id='Low Tom'
                        audioId='lowTomAudio'
                        triggerKey='a'
                        src={lowTom}
                        parentCallback={this.handleDisplay}
                    />
                    <DrumPad
                        id='Mid Tom'
                        audioId='midTomAudio'
                        triggerKey='s'
                        src={midTom}
                        parentCallback={this.handleDisplay}
                    />
                    <DrumPad
                        id='High Tom'
                        audioId='highTomAudio'
                        triggerKey='d'
                        src={highTom}
                        parentCallback={this.handleDisplay}
                    />
                    <DrumPad
                        id='Kick'
                        audioId='kickAudio'
                        triggerKey='z'
                        src={kick}
                        parentCallback={this.handleDisplay}
                    />
                    <DrumPad
                        id='Snare'
                        audioId='snareAudio'
                        triggerKey='x'
                        src={snare}
                        parentCallback={this.handleDisplay}
                    />
                    <DrumPad
                        id='Hi-Hat'
                        audioId='highHatAudio'
                        triggerKey='c'
                        src={highHat}
                        parentCallback={this.handleDisplay}
                    />
                </div>
                
                <div className='display-container'>
                    <div className='display-screen'>
                        <Display displayContent={this.state.currentSound} />
                    </div>
                </div>
            </div>
        )
    }
}