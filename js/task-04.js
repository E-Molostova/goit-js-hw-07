const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

const eventsCount = {
  count: 0,
  dec() {
    this.count += 1;
  },
  inc() {
    this.count += 1;
  },
};

function decrement() {
  eventsCount.dec();
  counterValue.textContent = eventsCount.count;
}

function increment() {
  eventsCount.inc();
  counterValue.textContent = eventsCount.count;
}
