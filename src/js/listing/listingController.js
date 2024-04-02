import * as view from './listingView.js';

export default function(state) {
    
    // container
    view.render();
    // cards
    state.results.forEach(function(item) {
        view.renderCard(item, state.favourites.isFav(item.id));
    })

    state.emitter.subscribe('event: render-listing', ()=> {

        view.clearListingContainer();

        state.results.forEach(function(item) {
            view.renderCard(item, state.favourites.isFav(item.id));
        })

        addToFavListener();


    })


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