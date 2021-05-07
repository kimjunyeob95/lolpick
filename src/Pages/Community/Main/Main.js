import React from "react";
import Header from "../../../Components/Header/Header";
import Nav from "../../../Components/Nav/Nav";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="skip-nav">
        <Link to="#content">본문 바로가기</Link>
      </div>
      <div id="container" className="container">
        <Header />
        <Nav />

        <div id="content" className="main community board">
          <section className="section list in15">
            <input type="search" className="input-text" placeholder="검색어를 입력해 주세요" />
            <ul className="tabs line">
              <li className="current">
                <Link to="#tabCon1">전체</Link>
              </li>
              <li>
                <Link to="#tabCon2">분석</Link>
              </li>
              <li>
                <Link to="#tabCon3">자유</Link>
              </li>
            </ul>
            <div id="tabCon1" className="tab-content active">
              <select className="select">
                <option value="">작성일</option>
                <option value="">조회수</option>
                <option value="">추천</option>
              </select>
              <ul className="data-list bbs">
                <li className="notice">
                  <div className="item-idx">
                    <i className="ico notice"></i>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">[공지] 커뮤니티 게시글 작성 시 유의사항</Link>
                    </div>
                    <p className="data-wrap">
                      <span>공지</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">173</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">172</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">171</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier bronze small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">170</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">169</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">168</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pagination">
                <button className="btn prev" title="이전"></button>
                <div className="page">
                  <strong className="current">1</strong>
                  <span className="hypen">/</span>2
                </div>
                <button className="btn next" title="다음"></button>
              </div>
            </div>
            <div id="tabCon2" className="tab-content">
              <select className="select">
                <option value="">작성일</option>
                <option value="">조회수</option>
                <option value="">추천</option>
              </select>

              {/* 매치 전 */}
              <div className="game large">
                <div className="item match large all color1">
                  <p className="match-num all">ALL MATCH</p>
                </div>
              </div>
              <div className="btn-area">
                <Link to="com_01_01.html" className="btn bdr-sand large full">
                  매치 선택하기
                </Link>
              </div>
              {/* // 매치 전 */}

              {/* 매치 후 */}
              <div className="game large">
                <div className="item match large color1">
                  <p className="match-num">
                    MATCH <strong className="num">21</strong>
                  </p>
                  <div className="item team large">
                    <div className="img-wrap">
                      <img src="../@resource/images/@temp/team_icon_01.svg" alt="DRX Fullname" />
                    </div>
                    <p className="title en">DRX Fullname</p>
                  </div>
                  <div className="item team large">
                    <div className="img-wrap">
                      <img src="../@resource/images/@temp/team_icon_02.svg" alt="GEN Fullname" />
                    </div>
                    <p className="title en">GEN Fullname</p>
                  </div>
                </div>
              </div>
              <div className="btn-area">
                <Link to="" className="btn large-x edge">
                  <i className="hexagon"></i>
                  <span>매치로 이동하기</span>
                </Link>
                <Link to="com_01_01.html" className="btn bdr-sand large full">
                  매치 선택하기
                </Link>
              </div>
              {/* // 매치 후 */}

              <ul className="data-list bbs">
                <li className="notice">
                  <div className="item-idx">
                    <i className="ico notice"></i>
                  </div>
                  <div className="item article">
                    <Link to="#" className="title">
                      [공지] 커뮤니티 게시글 작성 시 유의사항
                    </Link>
                    <p className="data-wrap">
                      <span>공지</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">173</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">172</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">171</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier bronze small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">170</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">169</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">168</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pagination">
                <button className="btn prev" title="이전"></button>
                <div className="page">
                  <strong className="current">1</strong>
                  <span className="hypen">/</span>2
                </div>
                <button className="btn next" title="다음"></button>
              </div>
            </div>
            <div id="tabCon3" className="tab-content">
              <select className="select">
                <option value="">작성일</option>
                <option value="">조회수</option>
                <option value="">추천</option>
              </select>
              <ul className="data-list bbs">
                <li className="notice">
                  <div className="item-idx">
                    <i className="ico notice"></i>
                  </div>
                  <div className="item article">
                    <Link to="#" className="title">
                      [공지] 커뮤니티 게시글 작성 시 유의사항
                    </Link>
                    <p className="data-wrap">
                      <span>공지</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">173</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">172</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">171</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier bronze small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">170</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">169</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item-idx">
                    <span className="num">168</span>
                  </div>
                  <div className="item article">
                    <div className="title">
                      <Link to="#">글제목이 들어가는 영역입니다. 글자수 제한이 있어요</Link>
                      <Link to="#" className="comment">
                        [21]
                      </Link>
                    </div>
                    <p className="data-wrap">
                      <span>MATCH 21</span>
                      <span>27분 전</span>
                      <span>
                        <i className="tier master small"></i>작성자 닉네임
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pagination">
                <button className="btn prev" title="이전"></button>
                <div className="page">
                  <strong className="current">1</strong>
                  <span className="hypen">/</span>2
                </div>
                <button className="btn next" title="다음"></button>
              </div>
            </div>
            <button className="btn write" title="글쓰기"></button>
          </section>
          {/* // .section.list */}
        </div>
        {/* // #content */}
      </div>
      {/* // #container */}
    </div>
  );
};

export default Main;
