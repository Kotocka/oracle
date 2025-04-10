const cards = [
  { image: 'images/keter.png', text: 'Place a random object on your head as a crown' },
  { image: 'images/tiferet.png', text: 'Weigh your name' },
  { image: 'images/yesod.png', text: 'Press yourself like a button' },
  { image: 'images/malkuth.png', text: 'Lie down in the doorway and say "that\'s all"' },
  { image: 'images/path_aleph.png', text: 'Hide behind your own back' },
  { image: 'images/path_yod.png', text: 'Straighten out the wrinkle on your face' },
  { image: 'images/path_ayin.png', text: 'See the air bite the air' },
  { image: 'images/path_tsadi.png', text: 'Catch the glance that was just thrown' }
];

let interval;

function drawCard() {
  const img = document.getElementById('card-image');
  const text = document.getElementById('card-text');
  img.style.display = 'block';

  let counter = 0;
  interval = setInterval(() => {
    const random = Math.floor(Math.random() * cards.length);
    img.src = cards[random].image;
    text.textContent = '';
    counter++;
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    const final = Math.floor(Math.random() * cards.length);
    img.src = cards[final].image;
    text.textContent = cards[final].text;
  }, 2000);
}
