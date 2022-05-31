var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+375(99)99-99-999");
im.mask(selector);

new JustValidate('.contacts__form', {
  colorWrong: '#FF5C00',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLenght: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.Inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 11
      }
    },
  },
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Минимум 2 буквы',
      maxLenght: 'Максимум 10 букв'
    },
    tel: 'Укажите ваш телефон'
  },
});