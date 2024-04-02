import FavCards from './favCardsModel.js';
import * as view from './favCardsView.js';

export default  async function(state) {
    const favsList = state.favourites.favs;
    

    const favCards = new FavCards(favsList);
    await favCards.getFavs();
    view.render();

    if(favCards.cards) {
        favCards.cards.forEach(function(item) {
            view.renderCards(item, state.favourites.isFav(item.id));
        })
    }

    function addToFavListener() {
        Array.from(document.getElementsByClassName('card__like')).forEach((item)=>{
            item.addEventListener('click', function(e) {
                e.preventDefault();
    
                const currentId = e.target.closest('.card').dataset.id;
                state.favourites.toggleFav(currentId);
    
                view.toggleFavIcon(e.target.closest('.card__like'), state.favourites.isFav(currentId));
            })
        })
    }

    addToFavListener();


}