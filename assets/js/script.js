const soundsElement = document.querySelector('#content');

(async () =>  {
  const sounds = await getSounds();
  addSoundsToPage(sounds);
})();



async function getSounds() {
  const response = await fetch('assets/js/sounds.json');
  const json = await response.json();
  return json;
}

// Adds divs with faces
function addSoundsToPage(sounds) {
  sounds.forEach(sound => {
    const soundDiv = document.createElement('div');
    soundDiv.setAttribute('class', 'col-md');
    const facePicture = document.createElement('img');
    facePicture.setAttribute('width', '150px');
    facePicture.src = sound.faceSrc;
    soundDiv.appendChild(facePicture);

    const player = document.createElement('audio');
    player.src = sound.src;
    soundDiv.appendChild(player);

    // On click check if any of audio is playing, pause it, play the one that was clicked.
    facePicture.addEventListener('click', () => {
      const audioPlayers = document.querySelectorAll('audio');
      audioPlayers.forEach(player => {
        player.pause();
      });

      player.currentTime = 0;
      player.play();

    });


    soundsElement.appendChild(soundDiv);
  } );
}
