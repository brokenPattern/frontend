import React from 'react';

export default class PersonalDataForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            formSent: false,
            fieldValues: {
                name: '',
                nickName: '',
                email: '',
                field: '',
                position: '',
            },
            fieldRequired: {
                name: true,
                nickName: false,
                email: true,
                field: true,
                position: true,
            },
            fieldTouched:{
                name: false,
                nickName: false,
                email: false,
                field: false,
                position: false,
            },
            fieldValid:{
                name: false,
                nickName: true,
                email: false,
                field: false,
                position: false,
            },
            errorMsgs: {
                name: 'Please fill in your name',
                nickName: '',
                email: 'Please use a correct e-mail address',
                field: 'Please choose your field',
                position: 'Please choose your position',
            },
        }
        this.validateField = this.validateField.bind(this);
        this.updateState = this.updateState.bind(this);
        this.switchSelects = this.switchSelects.bind(this);
    }
    
    
    updateState (e) {
        const {name, value} = e.target;
        this.setState(prevState => ({
            fieldValues: {
                ...prevState.fieldValues,
                        [name]: value
            }
        }))
        this.validateField(name, value)
        
    }
    
    validateField = (name, value) => {
        const config = {
            
                validationRules: {
                    name:  value.trim().length, //most basic validation rule. checks if there's anything typed in the field
                    nickName: true,
                    email: value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
                    field: value.trim().length,
                    position: value.trim().length,
                },
        }
        this.setState(prevState => ({
            fieldTouched: {
                ...prevState.fieldTouched,
                        [name]: true
            }
        }))
        
        if(this.state.fieldRequired[name]){
            
            
            if(config.validationRules[name]){

                this.setState(prevState => ({
                    fieldValid: { 
                        ...prevState.fieldValid,
                        [name]: true
                    }
                }))
                
            } else {
                
                 this.setState(prevState => ({
                    fieldValid: { 
                        ...prevState.fieldValid,
                        [name]: false
                    }
                }))
                
            }
            
        }
        
    }
    
    validateAllFields = () =>{
        let valid = true;
        Object.entries(this.state.fieldValues).forEach(
            ([key, value]) => this.validateField(key, value)
        )
        Object.entries(this.state.fieldValid).forEach(
            ([key, value]) => {if (value === false){
                valid = false
            }
        }
        )
        return valid;
    }
    
    saveToLocalStorage = () => {
        window.localStorage.setItem('PDFUser', JSON.stringify(this.state.fieldValues));
    }
    
    openResults = (e) => {
        const personalDataWindow = window.open("", "PersonalDataFormResults")
        let userData = JSON.parse(window.localStorage.getItem('PDFUser'));
        let message = "<ol>From Local Storage:<li>Name: "+userData.name+"</li><li>Nickname: "+userData.nickName+"</li><li>E-mail: "+userData.email+"</li><li>Field: "+userData.field+"</li><li>Position: "+userData.position+"</li></ol>";
       personalDataWindow.document.body.innerHTML = message;
        
    }
    
    
    submitPersonalDataForm = (e) => {
        e.preventDefault();
        if(this.validateAllFields()){
            this.setState(prevState => ({
                    formSent: true
                }))
            this.saveToLocalStorage()
        }
    }
    
    switchSelects () {
        switch(this.state.fieldValues.field){
            case  'IT':
                return (
                    
                        <select name="position" id="position" onChange={this.updateState}>
                            <option value="">{this.state.fieldValues.position ? 'Go back to Field' : 'Position'}</option>
                            <option value="Front-end developer">Front-end developer</option>
                            <option value="Back-end developer">Back-end developer</option>
                            <option value="DevOps">DevOps</option>
                            <option value="Front-end developer">Webmaster</option>
                        </select>
                    
                );
            case 'Product':
                return (
                        <select name="position" id="position" onChange={this.updateState}>
                            <option value="">{this.state.fieldValues.position ? 'Go back to Field' : 'Position'}</option>
                            <option value="Product Owner">Product Owner</option>
                            <option value="UX Designer">UX Designer</option>
                            <option value="UI Designer">UI Designer</option>
                        </select>
                    
                );
             case 'Content':
                return (
                        <select name="position" id="position" onChange={this.updateState}>
                            <option value="">{this.state.fieldValues.position ? 'Go back to Field' : 'Position'}</option>
                            <option value="Junior Copywriter">Junior Copywriter</option>
                            <option value="Senior Copywriter">Senior Copywriter</option>
                        </select>
                );

            default:
                return('');
        }
    }
    
    render() {
        if (this.state.formSent) {
            
            return (
                <div id="form-helper"><ol>
                    <li>Name: {this.state.fieldValues.name}</li>
                    <li>Nickname: {this.state.fieldValues.nickName}</li>
                    <li>E-mail: {this.state.fieldValues.email}</li>
                    <li>Field: {this.state.fieldValues.field}</li>
                    <li>Position: {this.state.fieldValues.position}</li>
                </ol>
                <button onClick={this.openResults}>view results in new Tab (Local Storage)</button></div>
            )
            
        } else {
            
            return (
                <div id="form-helper">
                    <form action="" id="personal-data-form" onSubmit={this.submitPersonalDataForm} noValidate>
                        <div className={'row ' 
                                        + (this.state.fieldRequired.name && this.state.fieldTouched.name ?
                                            (this.state.fieldValid.name ? 
                                                'success' : 'error')
                                           : '')}>

                            <input name="name" type="text" noValidate onBlur={this.updateState}/>
                            <label className={this.state.fieldValues.name && 'filled'} htmlFor="name">Name</label>

                            {this.state.fieldRequired.name
                             && this.state.fieldTouched.name 
                             && !this.state.fieldValid.name 
                             && <div className="error-message">{this.state.errorMsgs.name}</div>}

                        </div>

                        <div className={'row '
                                            + (this.state.fieldRequired.nickName && this.state.fieldTouched.nickName ? 
                                                (this.state.fieldValid.nickName ?
                                                    'success' : 'error')
                                               : '')}>

                            <input name="nickName" type="text" noValidate onBlur={this.updateState}/>
                            <label className={this.state.fieldValues.nickName && 'filled'} htmlFor="nickName">Nickname</label>

                            {this.state.fieldRequired.nickName 
                             && this.state.fieldTouched.nickName 
                             && !this.state.fieldValid.nickName 
                             && <div className="error-message">{this.state.errorMsgs.nickName}</div>}
                        </div>

                        <div className={'row '
                                            + (this.state.fieldRequired.email && this.state.fieldTouched.email ?
                                                (this.state.fieldValid.email ?
                                                    'success' : 'error')
                                               : '')}>

                            <input name="email" type="email" noValidate onBlur={this.updateState}/>
                            <label className={this.state.fieldValues.email && 'filled'} htmlFor="email">E-mail</label>

                            {this.state.fieldRequired.email
                             && this.state.fieldTouched.email 
                             && !this.state.fieldValid.email 
                             && <div className="error-message">{this.state.errorMsgs.email}</div>}

                        </div>
                        <div className={'row '
                                            + (this.state.fieldRequired.field && this.state.fieldTouched.field ? 
                                                (this.state.fieldValid.field ?
                                                    'success' : 'error')
                                               : '')}>

                            <select name="field" id="field" onChange={this.updateState} disabled={this.state.fieldValues.position !== ''}>
                                <option value="">Field</option>
                                <option value="IT">IT</option>
                                <option value="Product">Product</option>
                                <option value="Content">Content</option>
                            </select>

                            {this.state.fieldRequired.field 
                             && this.state.fieldTouched.field 
                             && !this.state.fieldValid.field 
                             && <div className="error-message">{this.state.errorMsgs.field}</div>}

                        </div>
                        {this.state.fieldValues.field && 
                        <div className={'row ' 
                                            + (this.state.fieldRequired.position && this.state.fieldTouched.position ?
                                                (this.state.fieldValid.position ?
                                                    'success' : 'error')
                                               : '')}>

                            {this.switchSelects()}

                            {this.state.fieldRequired.position 
                             && this.state.fieldTouched.position 
                             && !this.state.fieldValid.position 
                             && <div className="error-message">{this.state.errorMsgs.position}</div>}

                        </div>
                            }

                        <input id="submit-button" type="submit" value="Submit"/>
                    </form>


                    <ol>
                        <li>Name: {this.state.fieldValues.name}</li>
                        <li>Nickname: {this.state.fieldValues.nickName}</li>
                        <li>E-mail: {this.state.fieldValues.email}</li>
                        <li>Field: {this.state.fieldValues.field}</li>
                        <li>Position: {this.state.fieldValues.position}</li>
                    </ol>
                </div>



            )
        }
    }
}