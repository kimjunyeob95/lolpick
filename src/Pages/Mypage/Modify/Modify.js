import React from "react";
import Nav from "../../../Components/Nav/Nav";
import { Link } from "react-router-dom";

const Modify = () => {
  return (
    <div>
      <div className="skip-nav">
        <Link to="#content">본문 바로가기</Link>
      </div>
      <div id="container" className="container">
        <header id="header" className="header">
          <h1>회원정보 수정</h1>
          <div className="header-nav left">&nbsp;</div>
          <div className="header-nav right">
            <Link to="/mypage" className="btn page-close">
              <span className="blind">닫기</span>
            </Link>
          </div>
        </header>
        <Nav />

        <div id="content" className="main my-page modify">
          <section className="section in15">
            <div className="form-wrap">
              <form action="">
                <div className="modify-profile">
                  <div className="thumb">
                    <img src="../@resource/images/com/img_profile_02.svg" alt="" />
                  </div>
                  <div className="btn-area">
                    <Link to="" className="btn bdr-grey medium-x">
                      <i className="ico image"></i>이미지변경
                    </Link>
                    <Link to="" className="btn bdr-grey medium-x">
                      <i className="ico user-defult"></i>기본이미지
                    </Link>
                  </div>
                </div>
                <div className="field">
                  <span className="label">
                    닉네임 <em className="essential">*</em>
                  </span>
                  <span className="insert">
                    <input type="text" className="input-text" />
                  </span>
                </div>
                <div className="field">
                  <span className="label">
                    이메일 <em className="essential">*</em>
                  </span>
                  <span className="insert">
                    <input type="email" className="input-text" />
                  </span>
                </div>
                <div className="field">
                  <span className="label">전화번호</span>
                  <span className="insert tel">
                    <input type="tel" className="input-text" maxLength="3" />
                    <span className="hypen">-</span>
                    <input type="tel" className="input-text" maxLength="4" />
                    <span className="hypen">-</span>
                    <input type="tel" className="input-text" maxLength="3" />
                  </span>
                </div>
                <div className="btn-aside right">
                  <Link to="#" className="logout">
                    로그아웃
                  </Link>
                </div>
                <div className="btn-area center">
                  <button className="btn gold medium-2x round">저장</button>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* // #content */}
      </div>
      {/* // #container */}
    </div>
  );
};

export default Modify;
