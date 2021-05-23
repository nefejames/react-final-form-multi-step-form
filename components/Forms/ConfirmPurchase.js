import { Form, Field } from "react-final-form";
import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";

const validate = (values) => {
  const errors = {};
  if (!values.checkbox) {
    errors.checkbox = "Please confirm purchase";
  }

  return errors;
};

export default function ConfirmPurchase({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 2 ? styles.showForm : styles.hideForm}>
      <h2>Confirm Purchase</h2>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="checkbox">
              {({ input, meta }) => (
                <div className={styles.formRow}>
                  <label>
                    <input {...input} name="checkbox" type="checkbox" />
                    Confirm
                  </label>
                  {meta.error && meta.touched && (
                    <span className={styles.errorText}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>

            <button type="submit">Complete purchase</button>
          </form>
        )}
      />
    </div>
  );
}
