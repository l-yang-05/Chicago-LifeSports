
import React from 'react';


function signinform() {

    const submitForm = (e) => {
        e.preventDefault();

        const usernameInput = document.querySelector('#user-name').value;
        const passwordInput = document.querySelector('#pass-word').value;

        if (usernameInput.length === 0) {
            document.querySelector('#user-error').innerHTML = 'This field is required';
        }

        if (passwordInput.length === 0) {
            document.querySelector('#password-error').innerHTML = 'This field is required';
        }
    }

    const changeInput = (inputId) => {

        if (inputId === 'username') {
            document.querySelector('#user-error').innerHTML = '';
        }

        if (inputId === 'password') {
            document.querySelector('#password-error').innerHTML = '';
        }
    }

    return (

        <body>
            <div className="container2">
                <header>
                    <h1> Are you a life sports coach or student?</h1>
                    <h2> Sign In </h2>
                </header>

            </div>

            <div>
                <form className="myform" onSubmit={submitForm} name="signin_form">
                    <fieldset>
                        <legend>General Information</legend>
                        <div className="row">
                            <div className="col">
                                <label for="Full Name">Full Name:</label>

                                <input type="text" onChange={() => changeInput('username')} name="Username" id="user-name" placeholder="John567" />
                                <div id="password-error"></div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="Password">Password:</label>
                                <input type="text" onChange={() => changeInput('password')} name="Password" id="pass-word" />
                                <div id="email-error"></div>
                            </div>
                        </div>
                    </fieldset>


                    <input type="submit" value="submit" />
                </form>




            </div>

        </body>

    )
}




export default signinform;