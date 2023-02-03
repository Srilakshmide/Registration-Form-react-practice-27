import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {firstName: '', lastName: '', errorMsg: '', showSuccess: false}

  firstNameError = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({errorMsg: 'Required'})
    } else {
      this.setState({errorMsg: ''})
    }
  }

  lastNameError = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({errorMsg: 'Required'})
    } else {
      this.setState({errorMsg: ''})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmitSuccess = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()
    if (!firstName && !lastName) {
      this.setState({errorMsg: 'Required'})
    } else if (!firstName) {
      this.setState({errorMsg: 'Required'})
    } else if (!lastName) {
      this.setState({errorMsg: 'Required'})
    } else {
      this.setState({showSuccess: true, errorMsg: ''})
    }
  }

  onAnotherResponse = () => {
    this.setState({
      errorMsg: '',
      lastName: '',
      firstName: '',
      showSuccess: false,
    })
  }

  renderFirstNameField = () => {
    const {firstName, errorMsg} = this.state
    let className = 'input-field'
    const blur = this.firstNameError
    if (blur === true) {
      className = 'input-field error-field'
    }

    return (
      <>
        <label htmlFor="firstName" className="label">
          FIRST NAME
        </label>
        <input
          id="firstName"
          placeholder="First name"
          className={className}
          type="text"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.firstNameError}
        />
        {errorMsg && !firstName && <p className="err-msg">*{errorMsg}</p>}
      </>
    )
  }

  renderLastNameField = () => {
    const {lastName, errorMsg} = this.state
    let className = 'input-field'
    const blur = this.lastNameError
    if (blur === true) {
      className = 'input-field error-field'
    }

    return (
      <>
        <label htmlFor="lastName" className="label">
          LAST NAME
        </label>
        <input
          id="lastName"
          placeholder="Last name"
          className={className}
          type="text"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.lastNameError}
        />
        {errorMsg && !lastName && <p className="err-msg">*{errorMsg}</p>}
      </>
    )
  }

  render() {
    const {showSuccess} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {showSuccess ? (
          <>
            <div className="form-div-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-logo"
              />
              <p className="submit-success-text">Submitted Successfully</p>
              <button
                type="button"
                className="button"
                onClick={this.onAnotherResponse}
              >
                Submit Another Response
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={this.onSubmitSuccess} className="form-container">
            <div className="form-div-container">
              <div className="input-container">
                {this.renderFirstNameField()}
              </div>
              <div className="input-container">
                {this.renderLastNameField()}
              </div>
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
