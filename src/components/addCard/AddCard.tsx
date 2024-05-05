import React  from 'react'
import styles from './AddCard.module.css'
import Input from '../shared/Input';
import BlogsServices from '../../services/Blogs'
import useFormSubmission from '../../Hooks/useFormSubmission/useFormSubmission'
import { useTranslation } from 'react-i18next';
import { useData } from '../../DataContext/DataContext';

function AddCard() {

  const { setContentData } = useData();

  const { t ,i18n } = useTranslation();

  interface BlogPost {
    id?:string,
    title: string;
    description: string;
    liked: 0|1;
    unliked: 0|1;
  }

  const initialValues: BlogPost= {
    title: '',
    description: '',
    liked:0,
    unliked:0
  };

  const onSubmitCallback = async (values: BlogPost) => {
    if(i18n.dir()=="ltr"){
      await BlogsServices.handleSubmitEn(values, setContentData);
    }
    else{
      await BlogsServices.handleSubmitAr(values, setContentData);
    }
  };

  const {values,errors,onBlur,onChange,touched,onSubmit,isValid,isDirty} = useFormSubmission(initialValues, onSubmitCallback);   //custom hook 

  return (
    <section className={styles.form_section}>
      
      <br />
      <form className={styles.dataForm} id="dataForm" onSubmit={onSubmit}>
      <Input
          id="title"
          name="title"
          type="text"
          maxLength={50}
          value={values.title}
          errors={errors}
          onblur={onBlur}
          onchange={onChange}
          touched={touched}
        />
        <Input
          id="description"
          name="description"
          type="textarea"
          value={values.description}
          errors={errors}
          onblur={onBlur}
          onchange={onChange}
          touched={touched}
        />
        <br />
        {
        //formik.dirty indicates whether any field in the form has been touched.
        /*i added formik.dirty due to the initial render maybe occurring before Formik
         has had a chance to run its validation checks (maybe i think)
         */
        }
        <input type="submit" value={t("Submit")} disabled={!isValid || !isDirty} />
      </form>
    </section>
  );
}

export default AddCard
