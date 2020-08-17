import React from "react"
import Button from "../button/button"
import "./form.scss"

const Form = ({ formFields = [] }) => {
  const formFieldsJSX = formFields.map(
    ({ type, label, required = false, width }) => {
      const formFieldClassName =
        width === "full" ? "form__field" : "form__field form__field--half-width"

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

      return (
        <div className={formFieldClassName} key={label}>
          <label className="form__label" htmlFor={label}>
            {label}
          </label>
          {inputJSX}
        </div>
      )
    }
  )

  return (
    <form
      name="contact"
      className="form"
      method="post"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div className="form__wrapper">
        {formFieldsJSX.map(field => field)}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Button text="Submit" formSubmit={true} bgColor="sand" />
      </div>
    </form>
  )
}

export default Form
