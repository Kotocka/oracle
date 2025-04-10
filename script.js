const cards = [
  {
    image: 'images/keter.png',
    title: 'Place a random object on your head as a crown',
    description: 'Keter — The Crown. You stand before all creation, at the void where identity has not yet formed. This card invites you to surrender to the root of consciousness.'
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
    img.src = cards[0].image;
    title.textContent = '';
    description.textContent = '';
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    const card = cards[0];
    img.src = card.image;
    title.textContent = card.title;
    description.textContent = card.description;
  }, 2000);
}
