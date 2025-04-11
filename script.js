document.addEventListener("DOMContentLoaded", () => {
  const drawButton = document.getElementById("draw-btn");

  const cards = [
    {
      image: 'images/keter.png',
      title: 'Place a random object on your head as a crown',
      description: 'Keter — The Crown. You stand before all creation, at the void where identity has not yet formed. This card invites you to surrender to the root of consciousness.'
    },
    {
      image: 'images/tiferet.png',
      title: 'Weigh your name',
      description: 'Tiferet — Beauty. The harmony of opposites. You are a bridge, and your name is the thread woven between.'
    },
    {
      image: 'images/yesod.png',
      title: 'Press yourself like a button',
      description: 'Yesod — Foundation. You are the transmitter between dream and matter. Act, and the dream responds.'
    },
    {
      image: 'images/malkuth.png',
      title: 'Lie down in the doorway and say "that\'s all"',
      description: 'Malkuth — The Kingdom. This card reminds you that embodiment is enough. Land where you are.'
    },
    {
      image: 'images/path_aleph.png',
      title: 'Hide behind your own back',
      description: 'Path of Aleph. Hide — not to disappear, but to meet what finds you there.'
    },
    {
      image: 'images/path_yod.png',
      title: 'Straighten out the wrinkle on your face',
      description: 'Path of Yod. The smallest correction opens new timelines.'
    },
    {
      image: 'images/path_ayin.png',
      title: 'See the air bite the air',
      description: 'Path of Ayin. Perception folding in on itself. Trust what you cannot track.'
    },
    {
      image: 'images/path_tsadi.png',
      title: 'Catch the glance that was just thrown',
      description: 'Path of Tsadi. What flickers at the edge is where the magic hides.'
    }
  ];

  let interval;

  drawButton.addEventListener("click", () => {
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
  });
});
