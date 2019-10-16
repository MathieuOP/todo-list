import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

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

Button.propTypes = {
    content: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired
};

export default Button;