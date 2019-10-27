import React from 'react';

export default class PersonalDataForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            nickName: '',
            email: '',
            field: '',
            position: '',
        }
    }
    render() {
        return (
            <form action="" id="personal-data-form">
                <div className="row">
                    <input id="name" type="text" noValidate/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="row">
                    <input id="nick-name" type="text" noValidate/>
                    <label htmlFor="nick-name">Nickname</label>
                </div>
                <div className="row">
                    <input id="email" type="email" noValidate />
                    <label htmlFor="email">E-mail</label>
                </div>
                <select name="field" id="field">
                    <option value>Field</option>
                    <option value="IT">IT</option>
                    <option value="Product">Product</option>
                    <option value="Content">Content</option>
                </select>
                <select name="field" id="field">
                    <option value>Position</option>
                    <option value="Front-end developer">Front-end developer</option>
                    <option value="Back-end developer">Back-end developer</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Front-end developer">Webmaster</option>
                </select>
                <select name="field" id="field">
                    <option value>Position</option>
                    <option value="Product Owner">Product Owner</option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="UI Designer">UI Designer</option>
                </select>
                <select name="field" id="field">
                    <option value>Position</option>
                    <option value="Junior Copywriter">Junior Copywriter</option>
                    <option value="Senior Copywriter">Senior Copywriter</option>
                </select>
                <input id="submit-button" type="submit" value="Submit" />
            </form>
        )
    }
}