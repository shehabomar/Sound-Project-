function initializeAudioBehavior(buttonElement, audioFile, popupContent) {
    const audio = new Audio(audioFile);
    let isPlaying = false;

    function stopAudio() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        }
    }

    buttonElement.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        } else {
            audio.play();
            isPlaying = true;

            // Show the pop-up
            popupContent.style.display = 'block';
        }
    });

    popupContent.querySelector('#closePopup').addEventListener('click', () => {
        // Close the pop-up
        stopAudio();
        popupContent.style.display = 'none';
    });

    buttonElement.addEventListener('mouseout', () => {
        stopAudio();
    });

    document.addEventListener('mouseup', () => {
        stopAudio();
        popupContent.style.display = 'none';
    });
}

// Buttons 
const buttonD2 = document.querySelector('#d2');
const buttonD1 = document.querySelector('#d1');
const buttonB1 = document.querySelector('#b1');
const buttonB2 = document.querySelector('#b2');
const buttonC2 = document.querySelector('#c2');
const buttonA3 = document.querySelector('#a3');
const buttonA4 = document.querySelector('#a4');

const buttonA1B = document.querySelector('#a1b');
const buttonA1A = document.querySelector('#a1a');
const buttonA1C = document.querySelector('#a1c');

const buttonA2B = document.querySelector('#a2b');
const buttonA2A = document.querySelector('#a2a');
const buttonA2C = document.querySelector('#a2c');

const buttonA5B = document.querySelector('#a5b');
const buttonA5A = document.querySelector('#a5a');
const buttonA5C = document.querySelector('#a5c');

const buttonA6B = document.querySelector('#a6b');
const buttonA6A = document.querySelector('#a6a');
const buttonA6C = document.querySelector('#a6c');

const buttonBlueHall = document.querySelector('#bluehall');
const buttonRedTheater = document.querySelector('#redtheater');
const buttonBlackBox = document.querySelector('#blackbox');

// Containers
const popupD2 = document.querySelector('#d2-container');
const popupD1 = document.querySelector('#d1-container');
const popupB1 = document.querySelector('#b1-container');
const popupB2 = document.querySelector('#b2-container');
const popupC2 = document.querySelector('#c2-container');
const popupA3 = document.querySelector('#a3-container');
const popupA4 = document.querySelector('#a4-container');

const popupA1B = document.querySelector('#a1b-container');
const popupA1A = document.querySelector('#a1a-container');
const popupA1C = document.querySelector('#a1c-container');

const popupA2B = document.querySelector('#a2b-container');
const popupA2A = document.querySelector('#a2a-container');
const popupA2C = document.querySelector('#a2c-container');

const popupA5B = document.querySelector('#a5b-container');
const popupA5A = document.querySelector('#a5a-container');
const popupA5C = document.querySelector('#a5c-container');

const popupA6B = document.querySelector('#a6b-container');
const popupA6A = document.querySelector('#a6a-container');
const popupA6C = document.querySelector('#a6c-container');

const popupBlueHall = document.querySelector('#bluehall-container');
const popupRedTheater = document.querySelector('#redtheater-container');
const popupBlackBox = document.querySelector('#blackbox-container');

// Appling the function to the buttons and the pop ups
initializeAudioBehavior(buttonD2, 'd2.mp3', popupD2);
initializeAudioBehavior(buttonD1, 'd2.mp3', popupD1);
initializeAudioBehavior(buttonC2, 'd2.mp3', popupC2);
initializeAudioBehavior(buttonB2, 'd2.mp3', popupB2);
initializeAudioBehavior(buttonB1, 'd2.mp3', popupB1);
initializeAudioBehavior(buttonA3, 'd2.mp3', popupA3);
initializeAudioBehavior(buttonA4, 'd2.mp3', popupA4);
initializeAudioBehavior(buttonBlueHall, 'd2.mp3', popupBlueHall);
initializeAudioBehavior(buttonRedTheater, 'd2.mp3', popupRedTheater);
initializeAudioBehavior(buttonBlackBox, 'd2.mp3', popupBlackBox);

initializeAudioBehavior(buttonA1A, 'd2.mp3', popupA1A);
initializeAudioBehavior(buttonA1B, 'd2.mp3', popupA1B);
initializeAudioBehavior(buttonA1C, 'd2.mp3', popupA1C);

initializeAudioBehavior(buttonA2A, 'd2.mp3', popupA2A);
initializeAudioBehavior(buttonA2B, 'd2.mp3', popupA2B);
initializeAudioBehavior(buttonA2C, 'd2.mp3', popupA2C);

initializeAudioBehavior(buttonA5A, 'd2.mp3', popupA5A);
initializeAudioBehavior(buttonA5B, 'd2.mp3', popupA5B);
initializeAudioBehavior(buttonA5C, 'd2.mp3', popupA5C);

initializeAudioBehavior(buttonA6A, 'd2.mp3', popupA6A);
initializeAudioBehavior(buttonA6B, 'd2.mp3', popupA6B);
initializeAudioBehavior(buttonA6C, 'd2.mp3', popupA6C);
