import React from 'react';

class Form extends React.Component {
state={
firstName:'',
email:'',
select:'',
subscription: false,
gender: '',
}

handleChange=(event)=>{
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.firstName);
}
  
validateName=()=>{
    if(this.state.firstName.length<5){
alert('Чувак, тебя реально так зовут????')
    }
}

 validateEmail=() =>
{
    if(!/\S+@\S+\.\S+/.test(this.state.email)){
      alert('Чувак, ты ДОЛБАНУЛСЯ. Смотри что печатаешь!')  
    }
}

handleCheckboxChange =(event)=>{
this.setState({[event.target.name]: event.target.checked})
}
    render() {
        const{firstName, email, message, select, subscription, gender}=this.state
return <div>
    <input 
    onChange={this.handleChange}
    type="text" 
    name='firstName'
    placeholder='firstName' 
    value={firstName}
    onBlur={this.validateName}
    />
    <input 
    onChange={this.handleChange}
    type="text" 
    name='email'
    placeholder='email' 
    value={email}
    onBlur={this.validateEmail}
    />
    <br />
    <textarea 
    name="message" 
    value={message} 
    onChange={this.handleChange}></textarea>
    <br />
    <select name="select" value={select} onChange={this.handleChange}>
    <option value="" disabled></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <label htmlFor="">
     <input 
    onChange={this.handleCheckboxChange}
    type="checkbox" 
    name="subscription" 
    checked={subscription}/>   
    Substriction 
    </label>
    <br />
    <input type="radio" name="gender" value="male" onChange={this.handleChange} checked={gender ==="male"} />male
    <input type="radio" name="gender" value="female" onChange={this.handleChange} checked={gender ==="female"}/>female
   
  
</div>
    }
        
    
};

export  {Form};