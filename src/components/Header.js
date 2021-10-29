import React from 'react'
import '../stylesheets/Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    togglePreview = () => {
        this.props.togglePreview()
    }

    render() {
        let toggleText

        if (this.props.previewOn == false) {
            toggleText = <p>Preview Off</p>
        } else {
            toggleText = <p>Preview On</p>
        }

        return(
            <div id='header'>
                <div id='header-left'>
                    <img id='icon' src={process.env.PUBLIC_URL + '/images/icon.png'} alt='page icon' />
                    <h1 id='title'>Résumé Maker</h1>
                </div>
                <div id='header-right'>
                    <div id='preview-area'>
                        {toggleText}
                        <input type="checkbox" id="preview-button" class="toggle-input" onClick={this.togglePreview} />
                        <label class="preview-button toggle-label" for="preview-button">Toggle</label>
                    </div>
                    <button id='download-button' type='button'>Download PDF</button>
                </div>
            </div>
        )
    }
}

export default Header