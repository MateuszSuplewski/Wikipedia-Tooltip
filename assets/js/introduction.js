const tooltip = document.querySelectorAll('.tooltip');


tooltip.forEach((element) => {




    const tooltipLink = document.createElement('a');
    const tooltipContent = document.createElement('span');


    if (element.dataset.tooltipType === 'text') {

        tooltipContent.classList.add('tooltip__box--text');
        tooltipContent.innerText = element.dataset.tooltipContent;
    }
    else {
        tooltipContent.classList.add('tooltip__box--image');
        const tooltipImage = document.createElement('img');
        tooltipContent.appendChild(tooltipImage);
        tooltipImage.setAttribute('src', element.dataset.tooltipContent);
        tooltipImage.classList.add('tooltip__image');
    }

    tooltipLink.setAttribute('href', element.dataset.url);
    tooltipLink.innerText = element.innerText;

    element.innerText = '';
    tooltipContent.classList.add('tooltip__box');


    element.appendChild(tooltipLink);
    element.appendChild(tooltipContent);
});