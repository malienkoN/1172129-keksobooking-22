const getAdverts = (callback) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((adverts) => {
      callback(adverts);
    });
}

const sendFormData = (data, onSuccess, onFail) => {
  fetch(
    'https://22.javascript.pages.academy/keksobookings',
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

const wrappedNode = (element) => {
  const wrapper = document.createElement('div');
  wrapper.appendChild(element);

  return wrapper;
};

document.querySelector('.ad-form').addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  const onSuccess = () => {
    const clone = document.querySelector('#success').content.cloneNode(true);
    const node = wrappedNode(clone);
    main.appendChild(node);

    const escEvent = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        window.removeEventListener('keydown', escEvent);
        node.remove();
      }
    }

    window.addEventListener('keydown', escEvent);
  }

  const onFail = () => {
    const clone = document.querySelector('#error').content.cloneNode(true);
    const node = wrappedNode(clone);
    main.appendChild(node);

    const escEvent = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        window.removeEventListener('keydown', escEvent);
        node.remove();
      }
    }

    window.addEventListener('keydown', escEvent);

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
