// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('img');
  const synth = window.speechSynthesis;

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = ''; 

    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-name', voice.name);
      option.setAttribute('data-lang', voice.lang);
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text === '') return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    utterance.voice = voices.find(v => v.name === selectedName);

    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}