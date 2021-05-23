import { Form, Field } from "react-final-form";
import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid emaill address";
  }

  return errors;
};

export default function PersonalInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    setFormValues(values);
    // alert(JSON.stringify(values));
    nextFormStep();
  };

  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <h2>Personal Info</h2>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email">
              {({ input, meta }) => (
                <div className={styles.formRow}>
                  <label htmlFor="email">Email</label>
                  <input {...input} type="email" />
                  {meta.error && meta.touched && (
                    <span className={styles.errorText}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>

            <button type="submit">Next</button>
          </form>
        )}
      />
    </div>
  );
}
