import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BlogsServices from '../services/Blogs';

type BlogPost ={
    id?:string,
    title: string;
    description: string;
    liked: 0|1;
    unliked: 0|1;
  }


interface DataContextType {
    contentData: BlogPost[];
    setContentData: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  }

const defaultContextValue: DataContextType = {
    contentData: [], 
    setContentData: () => {}, 
};

const DataContext = createContext<DataContextType>(defaultContextValue);

export const DataProvider = ({ children }) => {
  const [contentData, setContentData] = useState<BlogPost[]>([]);
  const { t, i18n  } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      let data: BlogPost[]=[];
      if(i18n.dir()=="ltr"){
         data = await BlogsServices.fetchDataEn();
      }
      else {
         data = await BlogsServices.fetchDataAr();
      }
      setContentData(data);
    };

    fetchData();
  }, [i18n.dir()]);


  return (
    <DataContext.Provider value={{ contentData, setContentData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);