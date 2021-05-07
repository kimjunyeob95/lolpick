import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";

const Mypage = () => {
  return (
    <div>
      <div className="skip-nav">
        <NavLink to="#content">본문 바로가기</NavLink>
      </div>
      <div id="container" className="container">
        <Header />
        <Nav />
        <div id="content" className="my-page in15">
          <div className="title-wrap">
            <h2>마이페이지</h2>
          </div>
          <section className="section r-box bg-charcoal profile">
            <h3>PROFILE</h3>
            <NavLink to="/mypage/modify" className="btn setting" title="설정"></NavLink>
            {/* <button className="btn setting" title="설정"></button> */}
            <div className="profile-wrap">
              <div className="thumb">
                <img src="../@resource/images/com/img_profile.svg" alt="" />
              </div>
              <span className="name">HANBOM</span>
              <span className="email">hanbomi@hanbom.com</span>
              <div className="exp">
                <span className="grade">
                  <i className="tier master small"></i> 다이아
                </span>
                <span className="level">EXP.14</span>
                <div className="graph">
                  <span style={{ width: "30%" }}></span>
                </div>
              </div>
            </div>
          </section>
          {/* // .section.profile */}
          <section className="section r-box bg-charcoal in15 my-combo">
            <h3>
              MY <span>콤보</span>
            </h3>
            <button className="btn aside" title="MY 콤보 페이지로 이동"></button>
            <ul className="combo-list">
              <li>
                <span className="title">
                  <span>HANBOM</span>님의 랭킹
                </span>
                <span className="weight">
                  상위<strong>30</strong>%
                </span>
                <span className="text en">
                  <i className="tier master small"></i>Tier name
                </span>
              </li>
              <li>
                <span className="title">
                  나의 <span>COMBO</span>
                </span>
                <span className="weight">
                  <strong>+3</strong>COMBO
                </span>
                <span className="text">
                  최고콤보<em className="num">+6</em>
                </span>
              </li>
            </ul>
          </section>
          {/* // .section.my-combo */}
          <section className="section link">
            <ul className="data-list my">
              <li>
                <NavLink to="#" className="title">
                  <i className="ico line-p"></i>나의 포인트
                </NavLink>
                <NavLink to="#" className="data num">
                  <i className="ico point"></i>1,500
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="title">
                  <i className="ico line-e"></i>공지사항
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="title">
                  <i className="ico line-q"></i>문의하기
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="title">
                  <i className="ico line-set"></i>앱 설정
                </NavLink>
              </li>
            </ul>
          </section>
          {/* // .section.my-combo */}
        </div>
        {/* // #content */}
      </div>
      {/* // #container */}
    </div>
  );
};

export default Mypage;
