import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";

const contactFormSchema = Yup.object().shape({
  email: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Your number must be less than 50 characters!"),
  password: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Your number must be less than 50 characters!"),
});

const FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={css.form}>
        <label>
          <p>Email</p>
          <Field className={css.name} type="email" name="email"></Field>
          <ErrorMessage className={css.error} component="p" name="email" />
        </label>
        <label>
          <p>Password</p>
          <Field
            className={css.password}
            type="password"
            name="password"
          ></Field>
          <ErrorMessage className={css.error} component="p" name="password" />
        </label>
        <button className={css.btn} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
