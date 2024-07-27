// Task 6 :Use closures to create a simple module for managing a collection of items . Implement methods to add,remove,and list items .

function itemManager() {
    let items = [];
    return {
        addItem: function (item) {
            items.push(item);

        },
        removeItem: function (item) {
            items.pop();
        },
        listItems: function () {
            return items;
        }

    };
}

let itemModule = itemManager();
itemModule.addItem(135);
itemModule.addItem(513);
itemModule.addItem("Debanjali");
console.log(itemModule.listItems());

itemModule.removeItem();
console.log(itemModule.listItems());