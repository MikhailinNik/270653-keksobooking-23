const MIN_TITLE_LENGTH = 30;

const typeToMinPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const inputTitle = document.querySelector('#title');
const inputPrice = document.querySelector('#price');
const selectType = document.querySelector('#type');
const selectRoomNumber = document.querySelector('#room_number');
const selectCapacity = document.querySelector('#capacity');
const capacityList = document.querySelectorAll('#capacity option');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const roomToCapacity = {
  '1': [1],
  '2': [1, 2],
  '3': [1, 2, 3],
  '100': [0],
};

const capacityToIndex = {};

capacityList.forEach((option) => {
  capacityToIndex[option.value] = option.index;
});

inputTitle.addEventListener('input', () => {
  const valueLength = inputTitle.value.length;

  const errorMessage = valueLength < MIN_TITLE_LENGTH
    ? `Осталось ${MIN_TITLE_LENGTH - valueLength} симв.`
    : '';

  inputTitle.setCustomValidity(errorMessage);
  inputTitle.reportValidity();
});

const setInputPrice = () => {
  const minPrice = typeToMinPrice[selectType.value];

  inputPrice.min = minPrice;
  inputPrice.placeholder = minPrice;
};

const onSelectTypeChange = () => {
  setInputPrice();
};

selectType.addEventListener('change', onSelectTypeChange);

const validateInputPrice = (priceValue, minPrice) => {
  if (priceValue < minPrice) {
    inputPrice.reportValidity();
  } else {
    inputPrice.setCustomValidity('');
  }
};

const onInputPriceInput = (evt) => {
  const minPrice = +evt.target.min;
  const priceValue = evt.target.valueAsNumber;

  validateInputPrice(priceValue, minPrice);
};

inputPrice.addEventListener('focus', () => {
  inputPrice.addEventListener('input', onInputPriceInput);
});

inputPrice.addEventListener('blur', () => {
  inputPrice.removeEventListener('input', onInputPriceInput);
});

const validateCapacity = () => {
  const capacities = roomToCapacity[selectRoomNumber.value];

  if (!capacities.includes(+selectCapacity.value)) {
    const maxCapactity = capacities[capacities.length - 1];

    selectCapacity.selectedIndex = capacityToIndex[maxCapactity];
  }

  capacityList.forEach((option) => {
    option.disabled = !capacities.includes(+option.value);
  });
};

selectRoomNumber.addEventListener('change', () => {
  validateCapacity();
});

const syncTimeInput = (value) => {
  timeIn.value = value;
  timeOut.value = value;
};

timeIn.addEventListener('change', (evt) => {
  syncTimeInput(evt.target.value);
});

timeOut.addEventListener('change', (evt) => {
  syncTimeInput(evt.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
  setInputPrice();
  validateCapacity();
});
