const randomNumber = (min = 1, max = 99) => Math.round(Math.random() * (max - min)) + min;

export default randomNumber;
