import { Form, Field } from "react-final-form";
import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";

const validate = (values) => {
  const errors = {};
  if (!values.address) {
    errors.address = "Address is Required";
  }

  return errors;
};

export default function BillingInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    setFormValues(values);
    // alert(JSON.stringify(values));
    nextFormStep();
  };
  return (
    <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <h2>Billing Info</h2>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="address">
              {({ input, meta }) => (
                <div className={styles.formRow}>
                  <label htmlFor="address">Address</label>
                  <input {...input} type="text" />
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
