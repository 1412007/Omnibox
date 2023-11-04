import React from "react";
import { Formik, Field, Form } from "formik";

const ContactForm = () => {
  return (
    <div className="contactForm">
      <h2>Contact us</h2>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          message: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div className="field">
            <Field id="names" name="names" className="inputField" />
            <span className="floatingLabel">Names</span>
          </div>
          <div className="field">
            <Field
              id="phone"
              name="phone"
              type="phone"
              className="inputField"
            />
            <span className="floatingLabel">Phone</span>
          </div>
          <div className="field">
            <Field
              id="messages"
              name="messages"
              as="textarea"
              className="inputMessage"
              rows="10"
            />
            <span className="floatingLabel">Messages</span>
          </div>
          <button type="submit">Contact us</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
