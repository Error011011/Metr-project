import favCards from '../favCards/favCardsController';

export default function (state) {

    document.querySelector('#app').innerHTML = '';
    favCards(state);

}