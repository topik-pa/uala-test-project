import { React, Component } from 'react'

class AddColorFormAsClass extends Component {

    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(e) {
        const {_title, _color } = this.refs
        e.preventDefault();
        alert(`New color: ${_title.value} ${_color.value}`);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref="_title"
                    type="text"
                    placeholder="Color title..."
                    required/>
                <input ref="_color"
                    required/>
                <button>ADD COLOR</button>
            </form>
        )
    }
}


export default AddColorFormAsClass;