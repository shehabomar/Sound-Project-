function initializeAudioBehavior(rectElement, audioFile) {
    const audio = new Audio(audioFile);
    let isPlaying = false;

    function stopAudio() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        }
    }

    rectElement.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        } else {
            audio.play();
            isPlaying = true;
        }
    });

    rectElement.addEventListener('mouseout', () => {
        stopAudio();
    });

    document.addEventListener('mouseup', () => {
        stopAudio();
    });
}

// Usage
const rect = document.querySelector('#a1b');
initializeAudioBehavior(rect, '');

const rect2 = document.querySelector('#a2b');
initializeAudioBehavior(rect2, 'ORIGINAL_A2Baudio.mp3');

const rect3 = document.querySelector('#bluehall');
initializeAudioBehavior(rect3, 'piano.mp3');

const rect4 = document.querySelector('#d2');
initializeAudioBehavior(rect4, 'd2.mp3');
