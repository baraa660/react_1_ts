import React from 'react'
import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import styles from './Input.module.css'
import { useTranslation } from 'react-i18next';

interface BlogPost {
  id?:string,
  title: string;
  description: string;
  liked: 0|1;
  unliked: 0|1;
}

interface InputProps {
    id: string;
    name: string;
    type: string;
    maxLength?: number;
    value: string;
    onchange: React.ChangeEventHandler<HTMLInputElement>;
    onblur: React.FocusEventHandler<HTMLInputElement>;
    errors: FormikErrors<BlogPost>;  // Consider specifying a more specific type instead of any if possible
    touched: FormikTouched<BlogPost>;  // Consider specifying a more specific type instead of any if possible
  }

function Input({ id, name, type, maxLength, value, onchange, errors, onblur, touched }: InputProps) {


  const { t } = useTranslation();


  return (
    <div>
      <label htmlFor={id}>{t(name)}</label>
        <br />
        <input
          className={styles.input}
          type={type}
          maxLength={maxLength}
          id={id}
          name={name}
          value={value}
          onChange={onchange}
          onBlur={onblur}
        />
        {touched[name]&&errors[name]&&<p className={styles.error}>{t(errors[name])}</p>
        //error && <p className={styles.error}>{error}</p>
        }
        <br />
    </div>
  )
}

export default Input
