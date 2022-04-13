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

list.forEach((element) => {
    if (element.parentId === null) {
        const list = document.querySelector('ul'); //
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        listItem.dataset.id = element.id; //
        link.href = element.link;
        link.innerText = element.text;
        list.appendChild(listItem);
        listItem.appendChild(link);
    }
})

const itemsList = listSection.querySelectorAll('li');

itemsList.forEach((element) => {
    const id = Number(element.dataset.id);

    const children = list.filter(function (element2) {
        return element2.parentId === id;
    });

    if (children) {
        const lister = document.createElement('ul'); //
        element.appendChild(lister);

        children.forEach((element3) => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');

            link.href = element3.link;
            link.innerText = element3.text;
            lister.appendChild(listItem);
            listItem.appendChild(link);
        });
    }
});

