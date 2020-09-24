const formElem = document.getElementById("listform");
const listElem = document.getElementById("itemlist");

const items = [{
    id: Math.random(),
    text: "Dummy item 1",
    complete: true,
}, {
    id: Math.random(),
    text: "Dummy item test 2",
    completed: false,
}, {
    id: Math.random(),
    text: "Dummy item 3",
    completed: false,
}
];

createList(listElem);
function createList(listElem) {

    items.forEach(function (item) {
        let itemClassName = "item";
        if (item.complete) {
            itemClassName += " item--complete";
        }

        listElem.innerHTML +=
            `<li class="${itemClassName}" data-id="${item.id}">
            <button class="item__text">${item.text}</button>
            <button class="item__remove">Remove</button>
        </li>`
    });
}