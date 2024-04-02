export function renderContainer() {
    const markup = 
    `
    <div class="container p-0 mb-5">
        <div class="heading-1">Заявки</div>
    </div>

    <div class="panels-wrapper">
        <div id="bidsContainer" class="container p-0">
        </div>
    </div>

    `;

    document.querySelector('#app').insertAdjacentHTML('beforeend', markup);

}

export function renderBid(item) {
    const bidsContainer = document.querySelector('#bidsContainer');
    const markup = 
    `
    <div class="panel panel--no-hover">
        <div class="panel__bidid">${item.id}</div>
        <div class="panel__bidname">${item.name}</div>
        <div class="panel__bidphone">${item.phone}</div>
    </div>
    `;

    bidsContainer.insertAdjacentHTML('beforeend', markup);
}