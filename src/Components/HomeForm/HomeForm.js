import React from "react";
import { Formik, Field, Form } from "formik";

const HomeForm = () => {
  return (
    <div className="form">
      <div className="mx-auto max-w-screen-xl">
        <div className="formContent flex">
          <div className="leftContent">
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor amet amet dolor</p>
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
                  />
                  <span className="floatingLabel">Messages</span>
                </div>
                <button type="submit">Send</button>
              </Form>
            </Formik>
          </div>
          <div className="rightContent">
            <h2>
              Lorem ipsum
              <br /> dolor amet lorem
            </h2>
            <p className="description">
              Lorem ipsum dolor ngồi amet consectetuer lorem ipsum dolor ngồi
              amet consectetuer lorem ipsum dolor ngồi amet consectetuer lorem
              ipsum dolor{" "}
            </p>
            <p className="contact">
              Feel free to contact us here
              <br />{" "}
              <span>
                Hotline: <span style={{ color: "#E82E2E" }}>1900.99.92.22</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
