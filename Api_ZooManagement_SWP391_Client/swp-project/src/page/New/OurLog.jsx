import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
function OurLog() {
  const [listPages, setListPages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const getPages = async (page) => {
    let res = await axios.get(`https://localhost:44352/api/News/pages/${page}`);
    if (res && res.data) {
      console.log(res);
      setTotalPages(res.data.pages);
      setListPages(res.data.news);
    }
  };
  useEffect(() => {
    const getPages = async (page) => {
      let res = await axios.get(
        `https://localhost:44352/api/News/pages/${page}`
      );
      if (res && res.data) {
        setTotalPages(res.data.pages);
        setListPages(res.data.news);
      }
    };
    getPages(0);
  }, []);
  const customPrevious = (
    <li style={{ top: "-30px" }} className="prev">
      <i className="fa-solid fa-angles-left"></i>
    </li>
  );

  const customNext = (
    <li style={{ top: "-30px", padding: "0" }} className="next">
      <i className="fa-solid fa-angles-right"></i>
    </li>
  );
  const handlePageClick = (event) => {
    getPages(+event.selected + 1);
  };
  const editImg = (img) => {
    const path = img;
    const secondSlashIndex = path.indexOf("\\", path.indexOf("\\") + 1);
    const substring = path.substring(secondSlashIndex + 1);
    return substring;
  };
  const editDay = (dayNews) => {
    const releaseDate = new Date(dayNews);
    const day = releaseDate.getDate();
    const month = releaseDate.getMonth() + 1; // Cộng thêm 1 vào tháng
    const year = releaseDate.getFullYear();
    const formattedDate = day + "/" + month + "/" + year;
    return formattedDate;
  };

  console.log(editImg("C:\\fakepath\\caheo.jpg"));
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
            <div className="col-xl-8">
              {listPages.map((news) => (
                <div key={news.newsId} className="recent-news-two">
                  <img alt="recent-news-img" src={editImg(news.newsImage)} />
                  <div className="recent-news mt-3">
                    <div>
                      <a href="#">
                        <span>{news.releaseDate}</span>
                      </a>
                      <a href="blog-details.html">
                        <h2>{news.newsTitle}</h2>
                      </a>
                      <div className="d-flex align-items-center fix-img">
                        <img
                          alt="img"
                          className="me-3"
                          src="https://via.placeholder.com/55x55"
                        />
                        <h6>by {news.authorName}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-xl-4">
              <div className="posts recent-posts">
                <h3 style={{ textAlign: "center" }}>Recent Posts</h3>
                <ul>
                  {listPages.map((item) => (
                    <li key={item.id}>
                      <div style={{ margin: "10px" }}>
                        <img
                          style={{ width: "100%", height: "100%" }}
                          alt="img"
                          src={editImg(item.newsImage)}
                        />
                      </div>

                      <div>
                        <p>{editDay(item.releaseDate)}</p>
                        <h6>
                          <p>{item.newsTitle}</p>
                        </h6>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="posts">
                <h3>Number of animal species.</h3>
                <ul className="categories">
                  <li className="pt-0">
                    <a href="#">
                      Lion<span>12</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Tiger<span>13</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Elephant<span>19</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Giraffe<span>22</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Zebra <span>11</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Hippo<span>08</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="posts">
                <h3>Trending Dishes</h3>
                <ul className="trending-dishes-list">
                  <li className="pt-0">
                    <div className="dishes-list-img">
                      <img
                        alt="trending-dishe"
                        src="./../src/assets/img/sutu80x80.jpeg"
                      />
                    </div>
                    <h5>
                      <a href="#">Rolls with vermicelli &amp; pickle</a>
                    </h5>
                  </li>
                  <li>
                    <div className="dishes-list-img">
                      <img
                        alt="trending-dishe"
                        src="./../src/assets/img/casau80x80.jpeg"
                      />
                    </div>
                    <h5>
                      <a href="#">Spicy salad rolls with enoki</a>
                    </h5>
                  </li>
                  <li>
                    <div className="dishes-list-img">
                      <img
                        alt="trending-dishe"
                        src="./../src/assets/img/hama80x80.jpeg"
                      />
                    </div>
                    <h5>
                      <a href="#">chicken wings served with sriracha</a>
                    </h5>
                  </li>
                  <li>
                    <div className="dishes-list-img">
                      <img
                        alt="trending-dishe"
                        src="./../src/assets/img/vet80x80.jpeg"
                      />
                    </div>
                    <h5>
                      <a href="#">spicy salad rolls with enoki</a>
                    </h5>
                  </li>
                  <li>
                    <div className="dishes-list-img">
                      <img
                        alt="trending-dishe"
                        src="./../src/assets/img/nguavan80x80.jpeg"
                      />
                    </div>
                    <h5>
                      <a href="#">chicken wings served with sriracha</a>
                    </h5>
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
        pageCount={totalPages}
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
  );
}

export default OurLog;
