import React from "react"
import "./form.scss"

const Form = ({ formFields = [] }) => {
  const formFieldsJSX = formFields.map(
    ({ type, label, required = false, width }) => {
      const formFieldClassName =
        width === "full" ? "form__field" : "form__field form__field--half-width"

      return (
        <div className={formFieldClassName} key={label}>
          <label className="form__label" htmlFor={label}>
            {label}
          </label>
          <input className="form__input" type={type} name={label} id={label} />
        </div>
      )
    }
  )

  return (
    <form
      name="contact"
      className="form"
      method="post"
      action="#"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {formFieldsJSX.map(field => field)}
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special" />
        </li>
        <li>
          <input type="reset" value="Clear" />
        </li>
      </ul>
    </form>
  )
}

export default Form
