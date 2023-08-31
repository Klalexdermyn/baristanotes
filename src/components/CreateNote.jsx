import "./styleNote.css";
import { SaveButton } from "./SaveButton";
import { CloseButton } from "./CloseButton";
import { CustomInput } from "./CustomInput";

export function CreateNote(props) {
  const {
    handleNumbersInputChange,
    handleChange,
    values,
    touched,
    handleSubmit,
    closeNote,
    errors,
    handleBlur,
  } = props;
  
  return (
    <form
      className="note flex flex-col justify-center mx-auto my-6 max-w-lg rounded border border-neutral-100/50 p-4"
      onSubmit={handleSubmit}
    >
      <CustomInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        value={values.name}
        touched={touched.name}
        error={errors.name}
        id={"name"}
        placeholder={"Name"}
        maxLength={"24"}
      />
      <CustomInput
        handleChange={handleNumbersInputChange("weight")}
        handleBlur={handleBlur}
        value={values.weight}
        touched={touched.weight}
        error={errors.weight}
        id={"weight"}
        placeholder={"Weight"}
        maxLength={"24"}
      />
      <CustomInput
        handleChange={handleNumbersInputChange("extraction")}
        handleBlur={handleBlur}
        value={values.extraction}
        touched={touched.extraction}
        error={errors.extraction}
        id={"extraction"}
        placeholder={"Extraction"}
        maxLength={"24"}
      />
      <CustomInput
        handleChange={handleNumbersInputChange("preassure")}
        handleBlur={handleBlur}
        value={values.preassure}
        touched={touched.preassure}
        error={errors.preassure}
        id={"preassure"}
        placeholder={"Preassure"}
        maxLength={"24"}
      />
      <CustomInput
        handleChange={handleNumbersInputChange("grinding")}
        handleBlur={handleBlur}
        value={values.grinding}
        touched={touched.grinding}
        error={errors.grinding}
        id={"grinding"}
        placeholder={"Grinding"}
        maxLength={"24"}
      />
      <CustomInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        value={values.description}
        touched={touched.description}
        error={errors.description}
        id={"description"}
        placeholder={"Description"}
        maxLength={"48"}
      />
      <div className="pt-3">
        <SaveButton />
        <CloseButton closeNote={closeNote} />
      </div>
    </form>
  );
}
