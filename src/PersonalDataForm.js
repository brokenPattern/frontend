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
    
    
    updateState (name, value) {
        this.setState(prevState => ({[name]: value}))
    }
    
    validateField = (e) => {
        const {name, value} = e.target;
        const config = {
            fieldRequired: {
                    name: true,
                    nickName: false,
                    email: true,
                    field: true,
                    position: true,
                },
                validationRules: {
                    name:  value.trim().length, //most basic validation rule. checks if there's anything typed in the field
                    nickName: '',
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
        
        if(config.fieldRequired[name]){
            
            if(config.validationRules[name]){
                console.log('valid');

                this.setState(prevState => ({
                    fieldValid: { 
                        ...prevState.fieldValid,
                        [name]: true
                    }
                }))
                //this.updateState(name, value);
                
            } else {
                console.log('invalid');
                
                 this.setState(prevState => ({
                    fieldValid: { 
                        ...prevState.fieldValid,
                        [name]: false
                    }
                }))
                
            }
            
        }
        
        this.updateState(name, value);
        
    }
    
    switchSelects () {
        switch(this.state.field){
            case  'IT':
                return (
                    
                        <select name="position" id="position" onChange={this.validateField}>
                            <option value="">{this.state.position ? 'Go back to Field' : 'Position'}</option>
                            <option value="Front-end developer">Front-end developer</option>
                            <option value="Back-end developer">Back-end developer</option>
                            <option value="DevOps">DevOps</option>
                            <option value="Front-end developer">Webmaster</option>
                        </select>
                    
                );
            case 'Product':
                return (
                         <select name="position" id="position" onChange={this.validateField}>
                            <option value="">{this.state.position ? 'Go back to Field' : 'Position'}</option>
                            <option value="Product Owner">Product Owner</option>
                            <option value="UX Designer">UX Designer</option>
                            <option value="UI Designer">UI Designer</option>
                                             </select>
                    
                );
             case 'Content':
                return (
                         <select name="position" id="position" onChange={this.validateField}>
                            <option value="">{this.state.position ? 'Go back to Field' : 'Position'}</option>
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
                    <div className={this.state.fieldTouched.name ? (this.state.fieldValid.name ? 'row success' : 'row error'): 'row'}>
                        <input name="name" type="text" noValidate onBlur={this.validateField}/>
                        <label htmlFor="name">Name</label>
                        {this.state.fieldTouched.name && !this.state.fieldValid.name && <div className="error-message">{this.state.errorMsgs.name}</div>}
                    </div>
                    <div className={this.state.fieldTouched.name ? (this.state.fieldValid.name ? 'row success' : 'row error'): 'row'}>
                        <input name="nickName" type="text" noValidate onBlur={this.validateField}/>
                        <label htmlFor="nickName">Nickname</label>
                        {this.state.fieldTouched.nickName && !this.state.fieldValid.nickName && <div className="error-message">{this.state.errorMsgs.nickName}</div>}
                    </div>
                    <div className={this.state.fieldTouched.email ? (this.state.fieldValid.email ? 'row success' : 'row error'): 'row'}>
                        <input name="email" type="email" noValidate onBlur={this.validateField}/>
                        <label htmlFor="email">E-mail</label>
                        {this.state.fieldTouched.email && !this.state.fieldValid.email && <div className="error-message">{this.state.errorMsgs.email}</div>}
                    </div>
                    <div className={this.state.fieldTouched.field ? (this.state.fieldValid.field ? 'row success' : 'row error'): 'row'}>
                        <select name="field" id="field" onChange={this.validateField} disabled={this.state.position !== ''}>
                            <option value="">Field</option>
                            <option value="IT">IT</option>
                            <option value="Product">Product</option>
                            <option value="Content">Content</option>
                        </select>
                        {this.state.fieldTouched.field && !this.state.fieldValid.field && <div className="error-message">{this.state.errorMsgs.field}</div>}
                    </div>
                    <div className={this.state.fieldTouched.position ? (this.state.fieldValid.position ? 'row success' : 'row error'): 'row'}>
                        {this.switchSelects()}
                        {this.state.fieldTouched.position && !this.state.fieldValid.position && <div className="error-message">{this.state.errorMsgs.position}</div>}
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