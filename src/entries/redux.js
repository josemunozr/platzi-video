import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title')
  store.dispatch({ 
    type: 'ADD_SONG',
    payload: {
      title,
    }
  })
}

const initialState = [
  {
    title: 'Canción uno',
  },
  {
    title: 'Canción dos',
  },
  {
    title: 'Canción tres',
  },
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SONG':
        return [...state, action.payload];
    default:
      return state
  }
}

const store = createStore(
  reducer, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


//pinta el state en el DOM

function render() {
  const $constainer = document.getElementById('playlist');
  const playlist = store.getState();
  $constainer.innerHTML = ''
  playlist.forEach(item => {
    const tpl = document.createElement('p');
    tpl.textContent = item.title;
    $constainer.appendChild(tpl);
  });
}
render();

const handleChange = () => {
  render();
}

store.subscribe(handleChange);

console.log(store.getState());
