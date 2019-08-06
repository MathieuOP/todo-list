import React from 'react';

import './assets/style/button.scss';

const Button = ({ content, changeView }) => {

    const handleClick = (content) => () => {

        const contentLowerCase = content.toLowerCase();
        changeView(contentLowerCase);
    }

    return (
        <button onClick={handleClick(content)}> { content } </button>
    )
};

export default Button;