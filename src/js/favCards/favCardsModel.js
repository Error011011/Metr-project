export default class FavCards {
    constructor(favsList) {
        this.favsList = favsList;
    }

    async getFavs() {
        const ids = this.favsList.toString();

        if(ids) {
            const queryString = `https://jsproject.webcademy.ru/items?ids=${ids}`;
            const result = await fetch(queryString);
            const data = await result.json();
            this.cards = await data;
        }

    }
}