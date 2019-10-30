import React, { Component } from 'react'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    };

    // Proceed to next step
    nextStep = () => {
            const { step } = this.state;
            this.setState({
                step: step + 1
            })
        }
        // Go Back 
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }


    render() {
        const { step } = this.state;
        const { firstName, lastName, email, city, occupation, bio } = this.state;
        const values = {}
        return ( <
            div > < /div>
        )
    }
}

export default UserForm;