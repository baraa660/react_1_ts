
import axios from 'axios';

interface BlogPost {
    id?:string,
    title: string;
    description: string;
    liked: 0|1;
    unliked: 0|1;
  }





type SetContentDataFunction  = (contentData: BlogPost[]) => void;

 class BlogsServices{

  

    static async fetchDataEn() { 
        try {
          const response = await axios.get('http://localhost:3000/blogsEn');
          return response.data.reverse();
        } catch (error) {
          console.error('Error fetching data:', error);
          return []; // Return an empty array in case of error
        }
      }

      static async fetchDataAr() {  
        try {
          const response = await axios.get('http://localhost:3000/blogsAr');
          return response.data.reverse();
        } catch (error) {
          console.error('Error fetching data:', error);
          return []; // Return an empty array in case of error
        }
      }

      static async handleSubmitEn(formData: BlogPost, setContentData: SetContentDataFunction) {   
        try {
          await axios.post('http://localhost:3000/blogsEn', formData);
    
          /*
          i fetched data and not just updated directly on contentdata array like updatedCards 
          in deleteCards because if i pushed formData to array it will push it without the id, 
          and when fetch it will update the contentdata and get formData with id, this help me if 
          i wanted to delete formData after add it because i need the id to delete.
          */
          const data = await this.fetchDataEn();
          setContentData(data);
    
        } catch (error) {
          console.error('Error:', error);
        }
      }

      static async handleSubmitAr(formData: BlogPost, setContentData: SetContentDataFunction) {   
        try {
          await axios.post('http://localhost:3000/blogsAr', formData);
    
          /*
          i fetched data and not just updated directly on contentdata array like updatedCards 
          in deleteCards because if i pushed formData to array it will push it without the id, 
          and when fetch it will update the contentdata and get formData with id, this help me if 
          i wanted to delete formData after add it because i need the id to delete.
          */
          const data = await this.fetchDataAr();
          setContentData(data);
    
        } catch (error) {
          console.error('Error:', error);
        }
      }


    static async deleteCardEn(id: string, contentData: BlogPost[], setContentData: SetContentDataFunction) {
        try {
          await axios.delete(`http://localhost:3000/blogsEn/${id}`);
          const updatedCards = contentData.filter(card => card.id !== id);
          setContentData(updatedCards);
          
        } catch (error) {
          console.error('Error:', error);
        }
      }

      static async deleteCardAr(id: string, contentData: BlogPost[], setContentData: SetContentDataFunction) {
        try {
          await axios.delete(`http://localhost:3000/blogsAr/${id}`);
          const updatedCards = contentData.filter(card => card.id !== id);
          setContentData(updatedCards);
          
        } catch (error) {
          console.error('Error:', error);
        }
      }

      static async handleLikeEn(id: string, setContentData: SetContentDataFunction, contentData: BlogPost[]) {
        const url = `http://localhost:3000/blogsEn/${id}`;
        try {
          const response = await axios.patch(url,  {
            liked:1
          });
        
          if (response.status !== 200) {
            throw new Error('Failed to update card.');
          }

          //get the index of this ID
          const index = contentData.findIndex(obj => obj.id === id)

          contentData[index].liked = 1;

          // the value updated but react will detect it only If I changed it with setcontentdata
          setContentData([...contentData]);
          
        } catch (error) {
          console.error('Error updating card:', error);
        }
      }
      static async handleLikeAr(id: string, setContentData: SetContentDataFunction, contentData: BlogPost[]) {
        const url = `http://localhost:3000/blogsAr/${id}`;
        try {
          const response = await axios.patch(url,  {
            liked:1
          });
        
          if (response.status !== 200) {
            throw new Error('Failed to update card.');
          }

          //get the index of this ID
          const index = contentData.findIndex(obj => obj.id === id)

          contentData[index].liked = 1;

          // the value updated but react will detect it only If I changed it with setcontentdata
          setContentData([...contentData]);
          
        } catch (error) {
          console.error('Error updating card:', error);
        }
      }

      static async handleDisLikeEn(id: string, setContentData: SetContentDataFunction , contentData: BlogPost[]) {
        const url = `http://localhost:3000/blogsEn/${id}`;
        
        try {
          const response = await axios.patch(url,  {
            unliked:1
          });
        
          if (response.status !== 200) {
            throw new Error('Failed to update card.');
          }

          //get the index of this ID
          const index = contentData.findIndex(obj => obj.id === id)

          contentData[index].unliked = 1;

          // the value updated but react will detect it only If I changed it with setcontentdata
          setContentData([...contentData]);
          
        } catch (error) {
          console.error('Error updating card:', error);
        }
      }
      static async handleDisLikeAr(id: string, setContentData: SetContentDataFunction , contentData: BlogPost[]) {
        const url = `http://localhost:3000/blogsAr/${id}`;
        
        try {
          const response = await axios.patch(url,  {
            unliked:1
          });
        
          if (response.status !== 200) {
            throw new Error('Failed to update card.');
          }

          //get the index of this ID
          const index = contentData.findIndex(obj => obj.id === id)

          contentData[index].unliked = 1;

          // the value updated but react will detect it only If I changed it with setcontentdata
          setContentData([...contentData]);
          
        } catch (error) {
          console.error('Error updating card:', error);
        }
      }

      static async handleEditBlogEn(id: string, formData: BlogPost, setContentData: SetContentDataFunction, contentData: BlogPost[]) {  
        const url = `http://localhost:3000/blogsEn/${id}`; 

       try {
          const response = await axios.patch(url,formData);
          if (response.status !== 200) {
            throw new Error('Failed to update card.');
          }

          //get the index of this ID
          const index = contentData.findIndex(obj => obj.id === id)
          
          contentData[index] = {...formData,id:id};

          // the value updated but react will detect it only If I changed it with setcontentdata
          setContentData([...contentData]);

          
        } catch (error) {
          console.error('Error updating card:', error);
        }



    }
  
    static async handleEditBlogAr(id:string, formData: BlogPost, setContentData: SetContentDataFunction, contentData: BlogPost[]) {  
      const url = `http://localhost:3000/blogsAr/${id}`; 

     try {
        const response = await axios.patch(url,formData);
        if (response.status !== 200) {
          throw new Error('Failed to update card.');
        }

        //get the index of this ID
        const index: number = contentData.findIndex(obj => obj.id === id)
        
        contentData[index] = {...formData,id:id};

        // the value updated but react will detect it only If I changed it with setcontentdata
        setContentData([...contentData]);

        
      } catch (error) {
        console.error('Error updating card:', error);
      }



  }
}

    export default BlogsServices;
