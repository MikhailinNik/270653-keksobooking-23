const MIN_TITLE_LENGTH = 30;

const MIN_PRICE = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const CAPACITY_ROOM = {
  '1': [2],
  '2': [1, 2],
  '3': [0, 1, 2],
  '100': [3],
};

const inputTitle = document.querySelector('#title');
const inputPrice = document.querySelector('#price');
const selectType = document.querySelector('#type');
const selectRoomNumber = document.querySelector('#room_number');
const selectCapacity = document.querySelector('#capacity');

inputTitle.addEventListener('input', () => {
  const valueLength = inputTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    inputTitle.setCustomValidity(MIN_TITLE_LENGTH - valueLength);
  }

  inputTitle.setCustomValidity('');

  inputTitle.reportValidity();
});

selectType.addEventListener('change', (evt) => {
  const value = MIN_PRICE[evt.target.value];

  inputPrice.setAttribute('min', value);
  inputPrice.setAttribute('placeholder', value);
  inputPrice.addEventListener('input', (event) => {
    if (event.target.value < value) {
      inputPrice.setCustomValidity();
    }

    inputPrice.setCustomValidity('');

    inputPrice.reportValidity();
  });
});

selectRoomNumber.addEventListener('change', (evt) => {
  const capacity = CAPACITY_ROOM[evt.target.value];
  const options = selectCapacity.querySelectorAll('option');

  options.forEach((item, index) => {
    selectCapacity[index].disabled = true;
    selectCapacity[index].selected = false;
  });

  if (!capacity.includes(capacity)) {
    capacity.forEach((item, index) => {
      selectCapacity[capacity[index]].disabled = false;
      selectCapacity[capacity[index]].selected = true;
    });
  }
});
