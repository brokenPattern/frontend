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
        this.updateState = this.updateState.bind(this);
        this.renderSwitch = this.switchSelects.bind(this);
    }
    
    updateState (e) {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }
    switchSelects () {
        switch(this.state.field){
            case  'IT':
                return (
                    <select name="position" id="position" onChange={this.updateState}>
                        <option value="">Position</option>
                        <option value="Front-end developer">Front-end developer</option>
                        <option value="Back-end developer">Back-end developer</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Front-end developer">Webmaster</option>
                    </select>
                );
            case 'Product':
                return (
                     <select name="position" id="position" onChange={this.updateState}>
                        <option value="">Position</option>
                        <option value="Product Owner">Product Owner</option>
                        <option value="UX Designer">UX Designer</option>
                        <option value="UI Designer">UI Designer</option>
                    </select>
                );
             case 'Content':
                return (
                     <select name="position" id="position" onChange={this.updateState}>
                        <option value="">Position</option>
                        <option value="Junior Copywriter">Junior Copywriter</option>
                        <option value="Senior Copywriter">Senior Copywriter</option>
                    </select>
                );

            default:
                return('');
        }
    }
    
    render() {
        return (
            <div>
                <form action="" id="personal-data-form">
                    <div className="row">
                        <input name="name" type="text" noValidate onBlur={this.updateState}/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="row">
                        <input name="nickName" type="text" noValidate onBlur={this.updateState}/>
                        <label htmlFor="nickName">Nickname</label>
                    </div>
                    <div className="row">
                        <input name="email" type="email" noValidate onBlur={this.updateState}/>
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="row">
                        <select name="field" id="field" onChange={this.updateState}>
                            <option value="">Field</option>
                            <option value="IT">IT</option>
                            <option value="Product">Product</option>
                            <option value="Content">Content</option>
                        </select>
                    </div>
                    <div className="row">
                        {this.renderSwitch()}
                    </div>
                    
                   
                    
                    <input id="submit-button" type="submit" value="Submit" />
                </form>
                <ol>
                    <li>Name: {this.state.name}</li>
                    <li>Nickname: {this.state.nickName}</li>
                    <li>E-mail: {this.state.email}</li>
                    <li>Field: {this.state.field}</li>
                    <li>Position: {this.state.position}</li>
                </ol>
            </div>
            
            

        )
    }
}