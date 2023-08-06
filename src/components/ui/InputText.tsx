import styles from "@/styles/common/input.module.css";

type IInputTextProps = {
  id?: string;
  inputType: string;
  placeholder?: string;
  className?: string;
};

function InputText({ id, inputType, placeholder, className }: IInputTextProps) {
  return (
    <input
      id={id}
      type="text"
      className={`${styles[inputType]} ${className}`}
      placeholder={placeholder}
    />
  );
}

export default InputText;
