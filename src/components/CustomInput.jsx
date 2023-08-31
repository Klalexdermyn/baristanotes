
export function CustomInput(props) {
    const {
        handleChange,
        value,
        touched,
        error,
        handleBlur,
        placeholder,
        id,
        maxLength
      } = props;
    return (
        <div className={
            error && touched
              ? "t-6 border-b border-red-100"
              : "t-6 border-b border-gray-100"
          }>
          <input
            placeholder={placeholder}
            id={id}
            maxLength={maxLength}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              error && touched
                ? "w-full my-4 p-1 outline-none bg-red-100"
                : "w-full my-4 p-1 outline-none"
            }
          />
          {error && touched && (
            <p class="text-xs text-red-200">{error}</p>
          )}
        </div>
    );
  }