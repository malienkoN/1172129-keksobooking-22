const getAdverts = (callback) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((adverts) => {
      callback(adverts);
    });
}

const sendFormData = (data, onSuccess, onFail) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      credentials: 'same-origin',
      body: data,
    },
  )

    .then((response) => {
      return response.json();
    })

    .then((json) => {
      onSuccess(json);
    })

    .catch((err) => {
      onFail(err);
    })
}

const main = document.querySelector('main');

const doWrappedNode = (element) => {
  const wrapper = document.createElement('div');
  wrapper.appendChild(element);

  return wrapper;
};

document.querySelector('.ad-form').addEventListener('submit', (evt) => {
  evt.preventDefault();

  console.log(evt.target.valid);

  const formData = new FormData(evt.target);

  const onSuccess = () => {
    const clone = document.querySelector('#success').content.cloneNode(true);
    const node = doWrappedNode(clone);
    main.appendChild(node);

    const onEscEvent = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        window.removeEventListener('keydown', onEscEvent);
        node.remove();
      }
    }

    window.addEventListener('keydown', onEscEvent);
  }

  const onFail = () => {
    const clone = document.querySelector('#error').content.cloneNode(true);
    const node = doWrappedNode(clone);
    main.appendChild(node);

    const onEscEvent = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        window.removeEventListener('keydown', onEscEvent);
        node.remove();
      }
    }

    window.addEventListener('keydown', onEscEvent);

    document.querySelector('.error__button').addEventListener('click', (evt) => {
      evt.preventDefault();

      node.remove();
    });

    node.addEventListener('click', (evt) => {
      if (evt.target.closest('.error')) {
        evt.target.remove();
      }
    })
  }

  sendFormData(formData, onSuccess, onFail);
});

export {getAdverts, sendFormData};
