import React from 'react';
import PropTypes from 'prop-types';
import { addColor } from '../../../utils'

const AddColorForm = (props, {store}) => {
    let title, color
    const submit = e => {
        e.preventDefault();
        store.dispatch(addColor(title.value, color.value))
        title.value = ''
        color.value = '#000000'
        title.focus()
    }
    return (
        <form onSubmit={submit}>
            <input ref={input => title = input}
                type="text"
                placeholder="Color title..."
                required />
            <input ref={input => color = input}
                type="color"
                required />
            <button>ADD COLOR</button>
        </form>
    )
}

AddColorForm.contextTypes = {
    store: PropTypes.object
}

export default AddColorForm;