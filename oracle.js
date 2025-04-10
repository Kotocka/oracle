const cards = [
  {
    image: 'images/keter.png',
    title: 'Place a random object on your head as a crown',
    description: 'Keter — The Crown. You stand before all creation, at the void where identity has not yet formed. This card invites you to surrender to the root of consciousness. You are not someone — you are the potential for everything.'
  },
  {
    image: 'images/tiferet.png',
    title: 'Weigh your name',
    description: 'Tiferet — Beauty. The harmony of opposites. This card asks you to hold your inner child and your adult self in the same hand. You are a bridge, and your name is the thread woven between.'
  },
  {
    image: 'images/yesod.png',
    title: 'Press yourself like a button',
    description: 'Yesod — Foundation. Here, all energies are translated into form. You are the transmitter, the dreamer, the echo chamber. This card opens the portal between the symbolic and the actual. Act — and the dream responds.'
  },
  {
    image: 'images/malkuth.png',
    title: 'Lie down in the doorway and say "that's all"',
    description: 'Malkuth — The Kingdom. This is the only place you ever arrive: embodied, strange, sacred. This card reminds you that the end is also a landing. Lay down the drama and feel the floor of existence hold you.'
  },
  {
    image: 'images/path_aleph.png',
    title: 'Hide behind your own back',
    description: 'Path of Aleph — Between Keter and Chokmah. Aleph breathes silence into being. This card is the original spark, the unspoken word. Hide — not to disappear, but to learn who finds you there.'
  },
  {
    image: 'images/path_yod.png',
    title: 'Straighten out the wrinkle on your face',
    description: 'Path of Yod — Between Chesed and Tiferet. Yod is the tiniest letter, seed of divine will. This card is about the subtle correction that opens entire futures. One small gesture, one wrinkle smoothed — the world shifts.'
  },
  {
    image: 'images/path_ayin.png',
    title: 'See the air bite the air',
    description: 'Path of Ayin — Between Tiferet and Hod. Ayin sees beyond vision. This card is illusion looking at itself — perception folding in. Watch with your whole body. Trust what you cannot track.'
  },
  {
    image: 'images/path_tsadi.png',
    title: 'Catch the glance that was just thrown',
    description: 'Path of Tsadi — Between Netzach and Yesod. Tsadi is the fishhook — the thing that catches you without touch. This card speaks of sudden awareness, of something just missed but deeply felt. The magic is in what flickers at the edge.'
  }
];

let interval;

function drawCard() {
  const img = document.getElementById('card-image');
  const title = document.getElementById('card-text');
  const description = document.getElementById('card-description');
  img.style.display = 'block';

  clearInterval(interval);
  interval = setInterval(() => {
    const random = Math.floor(Math.random() * cards.length);
    img.src = cards[random].image;
    title.textContent = '';
    description.textContent = '';
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    const final = Math.floor(Math.random() * cards.length);
    const card = cards[final];
    img.src = card.image;
    title.textContent = card.title;
    description.textContent = card.description;
  }, 2000);
}
