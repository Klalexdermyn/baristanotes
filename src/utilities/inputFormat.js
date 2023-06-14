export function inputFormat(inputValue) {
  console.log(inputValue);
  if (inputValue) {
    inputValue = inputValue.toString();
    inputValue = inputValue.replace(/[^0-9.]/g, "");
    inputValue = inputValue.replace(/^0+/, "");
    const dotCount = (inputValue.match(/\./g) || []).length;
    if (dotCount > 1) {
      inputValue = inputValue.replace(/\.([^.]*)$/g, '$1');
    }
    if (inputValue.indexOf(".") === 0) {
      inputValue = inputValue.replace(/^\.+/g, "");
    }
    return inputValue;
  } else {
    return "";
  }
}
