export function CustomInput(props) {
  const {
    handleChange,
    value,
    touched,
    error,
    handleBlur,
    placeholder,
    id,
    maxLength,
  } = props;
  return (
    <div
      className={
        error && touched
          ? "border-b py-1 border-red-100"
          : "border-b border-gray-100"
      }
    >
      <input
        placeholder={placeholder}
        id={id}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`w-full  outline-none ${error && touched
          ? " bg-red-100"
          : ""}`
        }
      />
    </div>
  );
}


