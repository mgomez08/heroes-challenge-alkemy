import { Formik, Field, Form } from "formik";
import { FormLoginValues } from "../types/types";
import { signIn } from "../services/signIn";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { UiContext } from "../context/UiContext";

const validate = (values: FormLoginValues) => {
  const errors: Partial<FormLoginValues> = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

export const Login = () => {
  const navigate = useNavigate();
  const { handleOpenNotification } = useContext(UiContext);
  const { login } = useContext(AuthContext);
  const handleSubmit = async (data: FormLoginValues) => {
    const result = await signIn(data);
    if (result.status === 200) {
      login(result.data.token);
      navigate("/");
    } else {
      handleOpenNotification(result.error, "danger");
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleBlur, touched }) => (
          <Form className="form-container">
            <h1 className="h3 mb-3 fw-normal text-center">
              ¡Sign in Heroes App!
            </h1>
            <label className="form-label">Email address</label>
            <Field
              name="email"
              className="form-control mb-1"
              placeholder="name@example.com"
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? (
              <div className="alert alert-danger">{errors.email}</div>
            ) : null}
            <label className="form-label">Password</label>
            <Field
              name="password"
              type="password"
              className="form-control mb-3"
              placeholder="******"
              onBlur={handleBlur}
            />
            {touched.password && errors.password ? (
              <div className="alert alert-danger">{errors.password}</div>
            ) : null}

            <button className="btn btn-lg btn-primary mb-2" type="submit">
              Sign in
            </button>
          </Form>
        )}
      </Formik>
      <div className="cover-img"></div>
    </>
  );
};
