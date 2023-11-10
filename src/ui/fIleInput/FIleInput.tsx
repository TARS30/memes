import { HiArrowDownOnSquare } from "react-icons/hi2";

import styles from "./FileInput.module.css";

export interface FileInputProps {
  disabled: boolean;
  accept: string;
  register: any;
  type: string;
  id: string;
}

export default function FIleInput({
  disabled,
  register,
  accept,
  type,
  id,
}: FileInputProps) {
  return (
    <div className={styles.input__wrapper}>
      <input
        id={id}
        type={type}
        {...register}
        accept={accept}
        disabled={disabled}
        className={styles.input__file}
      />
      <label htmlFor="image" className={styles.input__file_button}>
        <span className={styles.input__file_icon_wrapper}>
          <HiArrowDownOnSquare />
        </span>
        <span className={styles.input__file_button_text}>Choose meme</span>
      </label>
    </div>
  );
}
