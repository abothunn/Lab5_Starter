// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.getElementById('volume-controls');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    hornImage.src = `assets/images/${horn}.svg`;
    hornAudio.src = `assets/audio/${horn}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    hornAudio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  playButton.addEventListener('click', () => {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}