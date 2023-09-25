import "./styleNote.css";
import { SaveButton } from "./SaveButton";
import { CloseButton } from "./CloseButton";
import { CustomInput } from "./CustomInput";

export function CreateNote(props) {
  const {
    handleNumbersInputChange,
    handleChange,
    handleSubmit,
    handleBlur,
    closeNote,
    values,
    touched,
    errors,
  } = props;

  return (
    <form
      className="note flex flex-col justify-center mx-auto my-6 max-w-lg rounded border border-neutral-100/50 p-8"
      onSubmit={handleSubmit}
    >
      <div className="px-4 sm:px-0">
        <div className="flex items-center ">
          <h2 className="text-base font-semibold leading-7 text-gray-900 pr-6">
            {"Name:"}
          </h2>
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
          {errors.name && touched.name && (
              <p class="text-xs text-red-200 pl-4">{errors.name}</p>
            )}
        </div>
        <div className="flex items-center ">
          <p className="max-w-2xl text-sm leading-6 text-gray-500 pr-6">
            {"Description:"}
          </p>
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
          {errors.description && touched.description && (
              <p class="text-xs text-red-200 pl-4">{errors.description}</p>
            )}
        </div>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 ">
              Weight:
            </dt>
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
            {errors.weight && touched.weight && (
              <p class="text-xs text-red-200">{errors.weight}</p>
            )}
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Extraction:
            </dt>
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
            {errors.extraction && touched.extraction && (
              <p class="text-xs text-red-200">{errors.extraction}</p>
            )}
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Preassure:
            </dt>
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
            {errors.preassure && touched.preassure && (
              <p class="text-xs text-red-200">{errors.preassure}</p>
            )}
          </div>
          <div className="px-4 pt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Grinding:
            </dt>
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
            {errors.grinding && touched.grinding && (
              <p class="text-xs text-red-200">{errors.grinding}</p>
            )}
          </div>
        </dl>
      </div>
      <div className="pt-3">
        <SaveButton />
        <CloseButton closeNote={closeNote} />
      </div>
    </form>
  );
}
