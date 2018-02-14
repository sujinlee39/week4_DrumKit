//listen for a keypress; if we press the right key, then find the matching audio file and play it. if they key doesn't show up on the keboard, the script shouldn't do anything
(() => {
  console.log('drumkit file loaded!');

// remove the highlight from each element after a keypress / transition event
  function removeHighlight(e) {
    console.log(e);
    // if this isn't the transform transition, then quit
    if (e.propertyName !== 'transform') {
      return;
    } else { // it IS the transform transition! do stuff!!
      e.target.classList.remove('playing'); // take the highlight back off
    }
  }

// this should fire every time a key is pushed; do something interseting inside this function
function playSound(e) {
  //debugger;
  console.log(e.keyCode);
  const audio =
  document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const key =
  document.querySelector(`div[data-key="${e.keyCode}"]`);

  key.classList.add('playing');
  // if we press a key that doesn't have a corresonding audio element, then quit and don't do anything else
 if (!audio) {return;}
 //rewind any audio files b4 playing it
  audio.currentTime = 0;
  audio.play();
}
//tell the browser to listen for a keypress event
  window.addEventListener('keydown', playSound);
  // loop through all the keys and take the highklight back off when the transition is done
  const keys = Array.from(document.querySelectorAll('.key')); // select all the key divs
  keys.forEach(key => key.addEventListener('transitionend', removeHighlight));
})();
