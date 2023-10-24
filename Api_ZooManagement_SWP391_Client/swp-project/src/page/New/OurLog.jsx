import React,{useState} from 'react'
import ReactPaginate from 'react-paginate';
function OurLog() {
   const [listPages,setListPages]=useState([]);
   const [totalPages,setTotalPages]=useState(0);

   const getPages=async(page)=>{
      let res = await axios.get();
      if(res && res.data){
         console.log(res);
         setTotalPages(res.pages);
         setListPages(res.data.news);
  
      }
   }
   const customPrevious = (
      <li  style={{top:"-30px"}} className="prev"><a href="#"><i className="fa-solid fa-angles-left"></i></a></li>
    );
  
    const customNext = (
      <li style={{top:"-30px"}} className="next"><a href="#"><i className="fa-solid fa-angles-right"></i></a></li>
    );
    const handlePageClick=(event)=>{
      getPages(+event.selected+1);
    }
  return (
    <div>
       <style>
        {`
          a {
            text-decoration: none;
          }
        `}
      </style>
      <section className="gap our-blog">
   <div className="container">
      <div className="row">
      {listPages.map((news) => (
        <div key={news.newsId} className="recent-news-two">
          <img alt="recent-news-img" src={news.newsImage} />
          <div className="recent-news mt-3">
            <div>
              <a href="#"><span>{news.releaseDate}</span></a>
              <a href="blog-details.html"><h2>{news.newsTitle}</h2></a>
              <div className="d-flex align-items-center">
                <img alt="img" className="me-3" src="https://via.placeholder.com/55x55" />
                <h6>by {news.authorName}</h6>
              </div>
            </div>
          </div>
        </div>
      ))}
         <div className="col-xl-4">
            <div className="posts recent-posts">
               <h3>Recent Posts</h3>
               <ul>
                 <li>
                   <img alt="img" src="../../src/assets/img/new1.jpeg"/>
                   <div>
                     <a href="#">29 December, 2022</a>
                     <h6><a href="#">Restaurant Located in on Bank Street</a></h6>
                   </div>
                 </li>
                 <li>
                   <img alt="img" src="../../src/assets/img/new2.jpeg"/>
                   <div>
                     <a href="#">29 December, 2022</a>
                     <h6><a href="#">There’s only one kind of happiness</a></h6>
                   </div>
                 </li>
                 <li>
                   <img alt="img" src='../../src/assets/img/new3.jpeg'/>
                   <div>
                     <a href="#">29 December, 2022</a>
                     <h6><a href="#">comes in all shapes and sizes.</a></h6>
                   </div>
                 </li>
               </ul>
            </div>
            <div className="posts">
               <h3>Number of animal species.</h3>
               <ul className="categories">
                 <li className="pt-0">
                     <a href="#">Lion<span>12</span></a>
                  </li>
                  <li>
                     <a href="#">Tiger<span>13</span></a>
                  </li>
                  <li>
                     <a href="#">Elephant<span>19</span></a>
                  </li>
                  <li>
                     <a href="#">Giraffe<span>22</span></a>
                  </li>
                  <li>
                     <a href="#">Zebra <span>11</span></a>
                  </li>
                  <li>
                     <a href="#">Hippo<span>08</span></a>
                  </li>
               </ul>
            </div>
            <div className="posts Photo">
               <h3>Instagram Photos</h3>
               <ul className="instagram-posts">
                 <li>
                   <a href="https://via.placeholder.com/100x80" data-fancybox="gallery"><figure><img alt="girl" src="../../src/assets/img/new100-80.jpeg"/></figure></a>
                 </li>
                 <li>
                   <a href="https://via.placeholder.com/100x80" data-fancybox="gallery"><figure><img alt="girl" src="./../src/assets/img/new2100-80.jpeg"/></figure></a>
                 </li>
                 <li>
                   <a href="https://via.placeholder.com/100x80" data-fancybox="gallery"><figure><img alt="girl" src="./../src/assets/img/new3100-80.jpeg"/></figure></a>
                 </li>
                 <li>
                   <a href="https://via.placeholder.com/100x80" data-fancybox="gallery"><figure><img alt="girl" src="./../src/assets/img/new4100-80.jpeg"/></figure></a>
                 </li>
                 <li>
                   <a href="https://via.placeholder.com/100x80" data-fancybox="gallery"><figure><img alt="girl" src="./../src/assets/img/new5100-80.jpeg"/></figure></a>
                 </li>
                 <li>
                   <a href="https://via.placeholder.com/100x80" data-fancybox="gallery"><figure><img alt="girl" src="./../src/assets/img/new6100-80.jpeg"/></figure></a>
                 </li>
               </ul>
               <a href="#">Follow @winsfolio</a>
            </div>
            <div className="posts">
               <h3>Trending Dishes</h3>
               <ul className="trending-dishes-list">
                 <li className="pt-0">
                     <div className="dishes-list-img">
                        <img alt="trending-dishe" src="./../src/assets/img/sutu80x80.jpeg"/>
                     </div>
                     <h5><a href="#">Rolls with vermicelli &amp; pickle</a></h5>
                  </li>
                  <li>
                     <div className="dishes-list-img">
                        <img alt="trending-dishe" src="./../src/assets/img/casau80x80.jpeg"/>
                     </div>
                     <h5><a href="#">Spicy salad rolls with enoki</a></h5>
                  </li>
                  <li>
                     <div className="dishes-list-img">
                        <img alt="trending-dishe" src="./../src/assets/img/hama80x80.jpeg"/>
                     </div>
                     <h5><a href="#">chicken wings served with sriracha</a></h5>
                  </li>
                  <li>
                     <div className="dishes-list-img">
                        <img alt="trending-dishe" src="./../src/assets/img/vet80x80.jpeg"/>
                     </div>
                     <h5><a href="#">spicy salad rolls with enoki</a></h5>
                  </li>
                  <li>
                     <div className="dishes-list-img">
                        <img alt="trending-dishe" src="./../src/assets/img/nguavan80x80.jpeg"/>
                     </div>
                     <h5><a href="#">chicken wings served with sriracha</a></h5>
                  </li>
               </ul>
            </div>
           
         </div>
      </div>
   </div>
</section>
<ReactPaginate
      nextLabel={customNext}
      previousLabel={customPrevious}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={10}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
    </div>
  )
}

export default OurLog