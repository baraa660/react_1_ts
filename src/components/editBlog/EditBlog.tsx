import React from 'react'
import BlogsServices from '../../services/Blogs';
import useFormSubmission from '../../Hooks/useFormSubmission/useFormSubmission';
import Input from '../shared/Input';
import styles from './EditBlog.module.css'
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useData } from '../../DataContext/DataContext';

function EditBlog() {

    interface BlogPost {
        id?:string,
        title: string;
        description: string;
        liked: 0|1;
        unliked: 0|1;
      }

  const { contentData,setContentData } = useData();

    const { t,i18n} = useTranslation();

    const {id=""} = useParams();

    const blog = contentData.find(post => post.id === id);
    
    const initialValues: BlogPost = {   
        title: blog?.title||"",
        description: blog?.description||"",
        liked:0,
        unliked:0 
      };

          
   

    
      const onSubmitCallback = async (values: BlogPost) => {
        if(i18n.dir()=="ltr"){  
          await BlogsServices.handleEditBlogEn(id, values, setContentData, contentData);
        }else{
          await BlogsServices.handleEditBlogAr(id, values, setContentData, contentData);
        }
      };
    
      const {values,errors,onBlur,onChange,touched,onSubmit,isValid,isDirty} = useFormSubmission(initialValues, onSubmitCallback);   //custom hook 
    
      return (
        <section className={styles.form_section} >
          
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

export default EditBlog
