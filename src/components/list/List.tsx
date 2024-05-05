import React from 'react';
import styles from './List.module.css'
import trash from '../../svg/trash-icon.svg'
import like from '../../svg/like.svg'
import dislike from '../../svg/dislike.svg'
import filledLike from '../../svg/like-filled.svg'
import filledDislike from '../../svg/dislike-filled.svg'
import Edit from '../../svg/edit.svg'
import BlogsServices from '../../services/Blogs'
import { Link ,useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Pagination } from '@workday/canvas-kit-react/pagination';
import { useData } from '../../DataContext/DataContext'


function List() {

  const { contentData,setContentData } = useData();

  //const navigate= useNavigate();
  const { t, i18n } = useTranslation();

  let [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')||"1");
  
 
  
  const resultsPerPage = 6;
  const lastIndex = currentPage * resultsPerPage;
  const firstIndex = lastIndex - resultsPerPage;
  const currentData = contentData.slice(firstIndex, lastIndex);
  const lastPage = Math.ceil(contentData.length / resultsPerPage);

 

  const handlePagination=( value: number)=>{
    setSearchParams(`page=${value}`) //or navigate(`/?page=${value}`)
  }


  const handleDelete=(id: string)=>{

    if(i18n.dir()=="ltr"){
      BlogsServices.deleteCardEn(id,contentData,setContentData )
    }
    else{
      BlogsServices.deleteCardAr(id,contentData,setContentData )
    }

  }

  const handleLike =(id: string)=>{
    if(i18n.dir()=="ltr"){
      BlogsServices.handleLikeEn(id, setContentData, contentData);
    }else{
      BlogsServices.handleLikeAr(id, setContentData, contentData);
    }
  }

  const handleDisLike =(id: string)=>{
    if(i18n.dir()=="ltr"){
      BlogsServices.handleDisLikeEn(id, setContentData, contentData);
    }else{
      BlogsServices.handleDisLikeAr(id, setContentData, contentData);
    }
  }

  return (
    <>
      <div id="list" className={styles.list}>
        {currentData?.map((card) => (
          <div className={styles.list_item} key={card.id}>
            <div className={styles.list_content}>
              <div className={styles.item_desc}>
                <div className={styles.item_header}>
                  <h2>{card.title}</h2>
                  <Link to={`/editBlog/${card.id}`}>
                    <img src={Edit} alt="Edit icon" width={20} height={20} />
                  </Link>
                </div>
 
 
                <p>
                  {card.description.length > 100
                    ? `${card.description.slice(0, 100)}...`
                    : card.description}
                  <Link to={`/blog/${card.id}`}>{t("readmore")}</Link>
                </p>

                <div className={styles.action_buttons}>
                  {card.liked === 0 && card.unliked === 0 ? (
                    <div>
                      <button className={styles.like_button}>
                        <img
                          src={like}
                          alt=""
                          onClick={() =>
                            handleLike(card.id||"",)
                          }
                        />
                      </button>
                      <button className={styles.like_button}>
                        <img
                          src={dislike}
                          alt=""
                          width={15}
                          height={15}
                          onClick={() =>
                            handleDisLike(card.id||"",)
                          }
                        />
                      </button>
                    </div>
                  ) : card.liked === 1 ? (
                    <div>
                      <button className={styles.clicked_button}>
                        <img
                          src={filledLike}
                          alt="filled like icon"
                          width={25}
                          height={25}
                        />
                      </button>
                      <button className={styles.unclicked_button}>
                        <img
                          src={dislike}
                          alt="dislike icon"
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button className={styles.unclicked_button}>
                        <img
                          src={like}
                          alt="like icon"
                          width={20}
                          height={20}
                        />
                      </button>
                      <button className={styles.clicked_button}>
                        <img
                          src={filledDislike}
                          alt="filled dislike icon"
                          width={25}
                          height={25}
                        />
                      </button>
                    </div>
                  )}

                  <button
                    className={styles.delete_btn}
                    onClick={()=>handleDelete(card.id||"")}
                  >
                    <span className="">
                      <img
                        src={trash}
                        alt="Trash icon"
                        width={15}
                        height={15}
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
      <Pagination
        aria-label="Pagination"
        lastPage={lastPage}
        
        initialCurrentPage={currentPage}
        onPageChange={handlePagination}
      >
        <Pagination.Controls>
          <Pagination.JumpToFirstButton aria-label="First" />
          <Pagination.StepToPreviousButton aria-label="Previous" />
          <Pagination.PageList>
          {({ state }) =>
              state.range.map((pageNumber) => (
                <Pagination.PageListItem key={pageNumber}>
                  <Pagination.PageButton
                    aria-label={`Page ${currentPage}`}
                    pageNumber={pageNumber}
                  />
                </Pagination.PageListItem>
              ))
            }
          </Pagination.PageList>
          <Pagination.StepToNextButton aria-label="Next" />
          <Pagination.JumpToLastButton aria-label="Last" />
        </Pagination.Controls>
      </Pagination>
      </div>
    </>
  );
}

export default List
