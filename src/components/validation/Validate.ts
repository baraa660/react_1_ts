import * as yup from 'yup';

interface BlogSchema {
    title: string;
    description: string;
}

export const addBlogSchemaEn: yup.ObjectSchema<BlogSchema> = yup.object({
  
    title: yup.string()
      .required('Title is required')
      .max(50, 'Title must be at most 50 characters')
      .matches(/^[A-Z]/, 'Title must start with a capital letter'),
      
    description: yup.string()
      .required('Description is required')
      .max(500, 'Description must be at most 500 characters'),
      
  });

  export const addBlogSchemaAr: yup.ObjectSchema<BlogSchema> = yup.object({
    title: yup.string()
      .required('العنوان مطلوب') 
      .max(50, 'يجب ألا يتجاوز العنوان 50 حرفًا') 
      .matches(/^[\u0600-\u06FF\s]+$/, 'يجب أن يتكون العنوان من حروف عربية فقط'), 
    description: yup.string()
      .required('الوصف مطلوب') 
      .max(500, 'يجب ألا يتجاوز الوصف 500 حرفًا')
      .matches(/^[\u0600-\u06FF\s]+$/, 'حروف عربية فقط'),
  });