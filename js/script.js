const formElem = document.getElementById("listform");
const listElem = document.getElementById("itemlist");

let items = [{
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

// calling the functions
createForm(formElem);
createList(listElem);

function createList(listElem) {

    listElem.innerHTML = "";

    items.forEach(function (item) {
        let itemClassName = "item";
        if (item.complete) {
            itemClassName += " item--complete";
        }

        listElem.innerHTML +=
            `<li class="${itemClassName}" data-id="${item.id}">
            <button class="item__text">${item.text}</button>
            <button class="item__remove">Remove</button>
        </li>`;
    });

    document.querySelectorAll(".item .item__text")
        .forEach(function (itemElem) {
            itemElem.addEventListener("click", handleItemTextClick);
        });

    document.querySelectorAll(".item .item__remove")
        .forEach(function (itemElem) {
            itemElem.addEventListener("click", handleItemRemove);
        });

}

function handleItemTextClick(event) {
    const itemId = event.currentTarget.parentElement.dataset.id;
    console.log("Item clicked! Item ID: " + itemId);

    // finding index using the itemID
    const itemIndex = items.findIndex(function (item) {
        return item.id == parseFloat(itemId)
    });

    console.log(itemIndex);

    // toggle the items completed state
    items[itemIndex].complete = !items[itemIndex].complete;

    createList(listElem);

}

function handleItemRemove(event) {
    const itemId = event.currentTarget.parentElement.dataset.id;
    console.log("Item remove! Item ID: " + itemId);

    // finding index using the itemID
    items = items.filter(function (item) {
        return item.id !== parseFloat(itemId)
    });

    createList(listElem);

}

function createForm(formElem) {
    formElem.addEventListener("click", handleAddItem);
}

function handleAddItem(event) {
    event.preventDefault();

    console.log("Form submitted");

    // get text from form
    const itemText = event.currentTarget.itemtext.value.trim();

    event.currentTarget.itemtext.value = "";


    if (itemText.length > 0) {
        // create new item and push to existing array
        items.push({
            id: Math.random(),
            text: itemText,
            complete: false,
        })

        // re-create the list
        createList(listElem);
    }

}