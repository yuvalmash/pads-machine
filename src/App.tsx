import React, { useState, useReducer } from 'react';
import './App.css';

function App() {
    let future_funk_beats_25 = new Audio('/sounds/120_future_funk_beats_25.mp3');
    let stutter_breakbeats_16 = new Audio('/sounds/120_stutter_breakbeats_16.mp3');
    let bass_Warwick_heavy = new Audio('/sounds/Bass Warwick heavy funk groove on E 120 BPM.mp3');
    let electric_guitar = new Audio('/sounds/electric guitar coutry slide 120bpm - B.mp3');
    let stompySlosh = new Audio('/sounds/FUD_120_StompySlosh.mp3');
    let groove = new Audio('/sounds/GrooveB_120bpm_Tanggu.mp3');
    let mazePolitics = new Audio('/sounds/MazePolitics_120_Perc.mp3');
    let pas3GROOVE1 = new Audio('/sounds/PAS3GROOVE1.03B.mp3');
    let silentStar = new Audio('/sounds/SilentStar_120_Em_OrganSynth.mp3');

    type TrackInArray = {
        trackName: HTMLAudioElement;
        isPlay: boolean;
    };

    const [allSounds, setAllSounds] = useState<TrackInArray[]>([
        { trackName: future_funk_beats_25, isPlay: false },
        { trackName: stutter_breakbeats_16, isPlay: false },
        { trackName: bass_Warwick_heavy, isPlay: false },
        { trackName: electric_guitar, isPlay: false },
        { trackName: stompySlosh, isPlay: false },
        { trackName: groove, isPlay: false },
        { trackName: mazePolitics, isPlay: false },
        { trackName: pas3GROOVE1, isPlay: false },
        { trackName: silentStar, isPlay: false },
    ]);
    const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

    function handleClick() {
        forceUpdate();
    }

    const handleClickedSound = (clickedSounds: any) => {
        for (const sound of allSounds) {
            let trackInArray = allSounds.find((sounds) => sounds.trackName.src === clickedSounds.src);
            if (!trackInArray!.isPlay) {
                trackInArray!.isPlay = true;
                clickedSounds.loop = true;
                clickedSounds.play();
            } else {
                trackInArray!.isPlay = false;
                clickedSounds.loop = false;
                clickedSounds.pause();
            }
        }
        setAllSounds(allSounds);
        handleClick();
    };

    return (
        <div className="App">
            <div className="grid-container">
                <div className="outer-square">
                    {allSounds.map((sound, index) => (
                        <div className="inner-grid" key={sound.trackName.src}>
                            <div
                                key={sound.trackName.src + index}
                                onClick={() => handleClickedSound(sound.trackName)}
                                className={`${sound.isPlay ? 'inner-square-on' : 'inner-square'}`}
                            >
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
