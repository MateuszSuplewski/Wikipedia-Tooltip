const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },

    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },

    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    }
];

const listSection = document.querySelector('.article__list');
if (list) {
    const list = document.createElement('ul');
    listSection.appendChild(list);
}

list.forEach((item) => {

    if (item.parentId === null) {
        const list = listSection.querySelector('ul'); //
        const listItem = createListItem(list, item);
        listItem.dataset.id = item.id; //
    }

});

const itemsList = listSection.querySelectorAll('li');

itemsList.forEach((item) => {
    const id = Number(item.dataset.id);
    const children = getChildren(list, id);
    if (children.length !== 0) {
        const childList = document.createElement('ul'); //
        item.appendChild(childList); //

        children.forEach((childItem) => {
            const listItem = createListItem(childList, childItem);
        });
    }
});

function createListItem(list, item) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.link;
    link.innerText = item.text;
    list.appendChild(listItem);
    listItem.appendChild(link);
    return listItem;
}

function getChildren(list, id) {
    const children = list.filter(function (childItem) {
        return childItem.parentId === id;
    });
    return children;
}
