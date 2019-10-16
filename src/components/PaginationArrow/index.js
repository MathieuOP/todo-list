import React from 'react';
import PropTypes from 'prop-types';
import './PaginationArrow.scss';

const PaginationArrow = ({
    updateForSlice,
    startSlice,
    endSlice,
    nbTodoDisplay,
    todoListFilterLength
}) => {

    const handleClickButtons = (currentButton) => () => {
        if (currentButton === 'prev' && startSlice > 0 ) {
            updateForSlice(currentButton);
        }

        if (currentButton === 'next' && endSlice < todoListFilterLength) {
            updateForSlice(currentButton);
        }
    }

    return (
        <div className="pagination">
            {
                (startSlice > 0 && nbTodoDisplay > 0) && (
                    <button onClick={handleClickButtons('prev')} className="pagination__btn pagination__btn--prev">Prev</button>
                )
            }

            {
                (endSlice < nbTodoDisplay && nbTodoDisplay > 0) && (
                    <button onClick={handleClickButtons('next')} className="pagination__btn pagination__btn--next">Next</button>
                )
            }
        </div>
    )
};

PaginationArrow.propTypes = {
    updateForSlice: PropTypes.func.isRequired,
    startSlice: PropTypes.number.isRequired,
    endSlice: PropTypes.number.isRequired,
    nbTodoDisplay: PropTypes.number.isRequired,
    todoListFilterLength: PropTypes.number.isRequired,
};

export default PaginationArrow;