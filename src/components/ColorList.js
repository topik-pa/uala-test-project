import React from 'react';
import Color from './Color';
import PropTypes from 'prop-types';
import { removeColor, rateColor } from '../actions'

const ColorList = ({ colors=[] }, {store} ) => {
    return (
        <div className="color-list">
            {(colors.length === 0) ? 
            <p>No colors listed. (Add a color)</p> : 
            colors.map(color => 
                <Color key={color.id}
                {...color}
                //onRate={(rating) => onRate(color.id, rating)}
                onRate = {(rating) => store.dispatch(rateColor(color.id, rating))}
                // onRemove={() => onRemove(color.id)} 
                onRemove = {() => store.dispatch(removeColor(color.id))}
                />
                )
            }
        </div> 
    )
}

ColorList.contextTypes = {
    store: PropTypes.object
}

export default ColorList;