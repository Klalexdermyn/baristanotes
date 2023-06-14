import "./styleNote.css";
import { SaveButton } from "./SaveButton";
import { CloseButton } from "./CloseButton";

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
      <div className="">
        <input
          placeholder="Name"
          id="name"
          maxLength="24"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.name && touched.name
              ? "w-full my-4 p-1 outline-none bg-red-100"
              : "w-full my-4 p-1 outline-none"
          }
        />
        {errors.name && touched.name && (
          <p class="text-xs text-red-200">{errors.name}</p>
        )}
      </div>
      <div
        className={
          errors.name && touched.name
            ? "t-6 border-t border-red-100"
            : "t-6 border-t border-gray-100"
        }
      >
        <input
          id="weight"
          className={
            errors.weight && touched.weight
              ? "w-full my-4 p-1 outline-none bg-red-100"
              : "w-full my-4 p-1 outline-none"
          }
          placeholder="Weight"
          value={values.weight}
          onChange={handleNumbersInputChange("weight")}
          onBlur={handleBlur}
        />

        {errors.weight && touched.weight && (
          <p className="text-xs text-red-200">{errors.weight}</p>
        )}
      </div>
      <div
        className={
          errors.weight && touched.weight
            ? "t-6 border-t border-red-100"
            : "t-6 border-t border-gray-100"
        }
      >
        <input
          id="extraction"
          className={
            errors.extraction && touched.extraction
              ? "w-full my-4 p-1 outline-none bg-red-100"
              : "w-full my-4 p-1 outline-none"
          }
          placeholder="Extraction"
          value={values.extraction}
          onChange={handleNumbersInputChange("extraction")}
          onBlur={handleBlur}
        />
        {errors.extraction && touched.extraction && (
          <p className="text-xs text-red-200">{errors.extraction}</p>
        )}
      </div>
      <div
        className={
          errors.extraction && touched.extraction
            ? "t-6 border-t border-red-100"
            : "t-6 border-t border-gray-100"
        }
      >
        <input
          id="preassure"
          className={
            errors.preassure && touched.preassure
              ? "w-full my-4 p-1 outline-none bg-red-100"
              : "w-full my-4 p-1 outline-none"
          }
          placeholder="Preassure"
          value={values.preassure}
          onChange={handleNumbersInputChange("preassure")}
          onBlur={handleBlur}
        />
        {errors.preassure && touched.preassure && (
          <p className="text-xs text-red-200">{errors.preassure}</p>
        )}
      </div>
      <div
        className={
          errors.preassure && touched.preassure
            ? "t-6 border-t border-red-100"
            : "t-6 border-t border-gray-100"
        }
      >
        <input
          id="grinding"
          className={
            errors.grinding && touched.grinding
              ? "w-full my-4 p-1 outline-none bg-red-100"
              : "w-full my-4 p-1 outline-none"
          }
          placeholder="Grinding"
          value={values.grinding}
          onChange={handleNumbersInputChange("grinding")}
          onBlur={handleBlur}
        />
        {errors.grinding && touched.grinding && (
          <p className="text-xs text-red-200">{errors.grinding}</p>
        )}
      </div>
      <div
        className={
          errors.grinding && touched.grinding
            ? "t-6 border-t border-red-100"
            : "t-6 border-t border-gray-100"
        }
      >
        <input
          id="description"
          placeholder="Description"
          maxLength="48"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.description && touched.description
              ? "w-full my-4 p-1 outline-none bg-red-100"
              : "w-full my-4 p-1 outline-none"
          }
        />
        {errors.description && touched.description && (
          <p className="text-xs text-red-200">{errors.description}</p>
        )}
      </div>
      <div>
        <SaveButton />
        <CloseButton closeNote={closeNote} />
      </div>
    </form>
  );
}
