const MIN_TITLE_LENGTH = 30;

const typeToMinPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const roomToCapacity = {
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
const options = selectRoomNumber.querySelectorAll('option');
const optionsCapacity = selectCapacity.querySelectorAll('option');

const inputListener = (evtInput, value) => {
  if (evtInput < value) {
    inputPrice.min = value;
  }

  inputPrice.setCustomValidity('');

  inputPrice.reportValidity();
};


inputTitle.addEventListener('input', () => {
  const valueLength = inputTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    inputTitle.setCustomValidity(MIN_TITLE_LENGTH - valueLength);
  }

  inputTitle.setCustomValidity('');

  inputTitle.reportValidity();
});

selectType.addEventListener('change', (evt) => {
  const value = typeToMinPrice[evt.target.value];

  const priceValue = inputPrice.value;

  inputPrice.min = value;
  inputPrice.placeholder = value;

  inputPrice.addEventListener('input', inputListener(priceValue, value));
  inputPrice.removeEventListener('input', inputListener());

});

inputPrice.addEventListener('input', () => {
  if (inputPrice.value < typeToMinPrice.flat) {
    inputPrice.min = 1000;
  }

  inputPrice.setCustomValidity('');
  inputPrice.reportValidity();
});


selectRoomNumber.addEventListener('change', (evt) => {
  const capacities = roomToCapacity[evt.target.value];

  options.forEach((item, index) => {
    selectCapacity[index].disabled = true;
    selectCapacity[index].selected = false;
  });

  if (!capacities.includes(capacities)) {
    capacities.forEach((item, index) => {
      selectCapacity[capacities[index]].disabled = false;
      selectCapacity[capacities[index]].selected = true;
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (options[0].selected) {
    optionsCapacity.forEach((item, index) => {
      selectCapacity[index].disabled = true;
    });
    selectCapacity[2].disabled = false;
  }
});

