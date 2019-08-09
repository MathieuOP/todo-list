import React from 'react';

import './assets/style/button.scss';

const Button = ({ content, changeView, active }) => {

    const handleClick = (content) => (e) => {

        const contentLowerCase = content.toLowerCase();
        const allButtons = e.currentTarget.parentNode.childNodes;
        const currentButton = e.currentTarget;

        allButtons.forEach(button => {
            button.classList.remove('button--active');
        });

        currentButton.classList.add('button--active')

        changeView(contentLowerCase);
    }

    return (
        <button className={active ? 'button button--active' : 'button'} onClick={handleClick(content)}> { content } </button>
    )
};

export default Button;