import React from "react"
import Button from "../button/button"
import "./form.scss"

const Form = ({
  formFields = [],
  formName,
  textColor = "primary",
  termsAndConditions,
}) => {
  const formFieldsJSX = formFields.map(
    ({ type, label, required = false, width, options = [] }) => {
      const formFieldClassName =
        width === "half" ? "form__field form__field--half-width" : "form__field"

      let inputJSX = (
        <input
          className="form__input"
          type={type}
          name={label}
          id={label}
          required={required}
        />
      )

      if (type === "textarea") {
        inputJSX = (
          <textarea
            className="form__textarea"
            type={type}
            name={label}
            id={label}
            required={required}
            rows={8}
          />
        )
      }

      if (type === "select") {
        inputJSX = (
          <select
            className="form__select"
            name={label}
            id={label}
            required={required}
          >
            <option value="" selected disabled hidden>
              Select..
            </option>
            {options.map(option => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            })}
          </select>
        )
      }

      return (
        <div className={formFieldClassName} key={label}>
          <label className="form__label" htmlFor={label}>
            {label}
            {required ? <span className="form__required">*</span> : null}
          </label>
          {inputJSX}
        </div>
      )
    }
  )

  return (
    <form
      name={formName}
      className={textColor === "primary" ? "form" : "form--color-inverse"}
      method="post"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div className="form__wrapper">
        {formFieldsJSX.map(field => field)}
        {termsAndConditions ? termsAndConditions : null}
        {termsAndConditions ? (
          <React.Fragment>
            <input
              type="checkbox"
              id="termsAndConditions"
              name="termsAndConditions"
              value={true}
              className="form__checkbox"
              required={true}
            />
            <label htmlFor="termsAndConditions">
              By checking this box I am thereby agreeing to the terms and
              conditions for the trial classes.
              {<span class="form__required">*</span>}
            </label>
          </React.Fragment>
        ) : null}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value={formName} />
      </div>

      <Button
        text="Submit"
        formSubmit={true}
        bgColor={textColor === "primary" ? "blue" : "sand"}
      />
    </form>
  )
}

export default Form
