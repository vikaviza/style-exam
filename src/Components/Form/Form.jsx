import React from "react";
import Gmail from '../../assets/img/social/google.svg'
import Facebook from '../../assets/img/social/facebook.svg';
import Button from "../Button/Button";
import Input from "./Input/Input";
import Person from "../../assets/img/input/user-solid.svg";
import Email from "../../assets/img/input/envelope-solid.svg";
import Password from "../../assets/img/input/lock-solid.svg";
import '../../styles/style.css'

function Form() {
    return (
        <form className="rightSide">
            <div className="formHeader">
                <h1>Get Started</h1>
                <p>Already have an account?</p>
                <a href="/">Log In</a>
            </div>
            
            <div className="socialButtonsContainer">
                <Button
                    className={'gmail'}
                    socialIcon={Gmail} 
                    text={'sign up'}/>
                <Button
                    className={'facebook'}
                    socialIcon={Facebook} 
                    text={'sign up'}/>
            </div>

            <h2>Or</h2>

            <Input
                
                label={'Name'}
                icon={Person}
                type={'text'}
                placeholder={'Joy Shaheb'}
            />
            <Input
                
                label={'Email'}
                icon={Email}
                type={'email'}
                placeholder={'abc@gmail.com'}
            />
            <Input
                
                label={'Password'}
                icon={Password}
                type={'password'}
                placeholder={'●●●●●●●'}
            />
            <input type='submit' value='Submit' id='submit' />
        </form>
    );
};

export default Form;