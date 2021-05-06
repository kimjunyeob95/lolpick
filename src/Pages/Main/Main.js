import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="skip-nav">
          <a href="#content">본문 바로가기</a>
        </div>
        <div id="container" className="container">
          <header id="header" className="header">
            <h1>
              <a href="MAIN_01.html" className="logo">
                <span className="blind">LOLPICK</span>
              </a>
            </h1>
            <div className="header-nav left">&nbsp;</div>
            <div className="header-nav right">
              <a href="STO_01.html" className="btn store">
                <span className="blind">STORE</span>
              </a>
            </div>
          </header>
          <nav id="menu" className="nav">
            <a className="btn home active" href="MAIN_01.html">
              <span className="blind">HOME</span>
            </a>
            <a className="btn talk" href="COM_01.html">
              <span className="blind">TALK</span>
            </a>
            <a className="btn pick" href="MAT_01.html">
              <span className="blind">PICK</span>
            </a>
            <a className="btn rank" href="RAN_01.html">
              <span className="blind">RANKING</span>
            </a>
            <a className="btn my" href="MY_01.html">
              <span className="blind">MY</span>
            </a>
          </nav>

          <div id="content" className="main">
            <h2 className="home-title">예측 중 경기</h2>
            <div className="deco-line ignore-in"></div>

            {/* Slider main container */}
            <div id="swiperMatch" className="swiper-container">
              {/* Additional required wrapper */}
              <ul className="swiper-wrapper">
                <li className="swiper-slide">
                  <div className="game large in15">
                    <h3 className="game-date">
                      <span className="date">2021. 03. 07</span> 일요일
                    </h3>
                    <div className="match-set">
                      <div className="item match large">
                        <p className="match-num">
                          MATCH <strong className="num">21</strong>
                        </p>
                        <div className="item team large">
                          <div className="img-wrap">
                            <img
                              src="../@resource/images/@temp/team_icon_01.svg"
                              alt="DRX Fullname"
                            />
                          </div>
                          <p className="title en">DRX Fullname</p>
                        </div>
                        <div className="item team large">
                          <div className="img-wrap">
                            <img
                              src="../@resource/images/@temp/team_icon_02.svg"
                              alt="GEN Fullname"
                            />
                          </div>
                          <p className="title en">GEN Fullname</p>
                        </div>
                      </div>
                      <div className="item match large">
                        <p className="match-num">
                          MATCH <strong className="num">22</strong>
                        </p>
                        <div className="item team large">
                          <div className="img-wrap">
                            <img
                              src="../@resource/images/@temp/team_icon_03.svg"
                              alt="HLE Fullname"
                            />
                          </div>
                          <p className="title en">HLE Fullname</p>
                        </div>
                        <div className="item team large">
                          <div className="img-wrap">
                            <img
                              src="../@resource/images/@temp/team_icon_04.svg"
                              alt="BRO Fullname"
                            />
                          </div>
                          <p className="title en">BRO Fullname</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn-area">
                      <button className="btn large-x edge">
                        <i className="hexagon"></i>
                        <span>예측하기</span>
                      </button>
                    </div>
                  </div>
                </li>

                <li className="swiper-slide">
                  <div className="game large in15">
                    <h3 className="game-date">
                      <span className="date">2021. 03. 07</span> 일요일
                    </h3>
                    <div className="match-set">
                      <div className="item match large">
                        <p className="match-num">
                          MATCH <strong className="num">21</strong>
                        </p>
                        <div className="item team large">
                          <div className="img-wrap">
                            <img
                              src="../@resource/images/@temp/team_icon_01.svg"
                              alt="DRX Fullname"
                            />
                          </div>
                          <p className="title en">DRX Fullname</p>
                        </div>
                        <div className="item team large">
                          <div className="img-wrap">
                            <img
                              src="../@resource/images/@temp/team_icon_02.svg"
                              alt="GEN Fullname"
                            />
                          </div>
                          <p className="title en">GEN Fullname</p>
                        </div>
                      </div>
                      <div className="item match large">
                        <p className="match-num">
                          MATCH <strong className="num">22</strong>
                        </p>
                        <div className="item team large">
                          <div className="img-wrap">
                            <img
                              src="../@resource/images/@temp/team_icon_03.svg"
                              alt="HLE Fullname"
                            />
                          </div>
                          <p className="title en">HLE Fullname</p>
                        </div>
                        <div className="item team large">
                          <div className="img-wrap">
                            <img
                              src="../@resource/images/@temp/team_icon_04.svg"
                              alt="BRO Fullname"
                            />
                          </div>
                          <p className="title en">BRO Fullname</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn-area">
                      <button className="btn large-x edge">
                        <i className="hexagon"></i>
                        <span>예측하기</span>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="swiper-slide">
                  <div className="game large in15">
                    <h3 className="game-date">
                      <span className="date">2021. 03. 07</span> 일요일
                    </h3>
                    <div className="match-set">
                      <div className="item match large">
                        <p className="match-num">
                          MATCH <strong className="num">21</strong>
                        </p>
                        <div className="item team large">
                          <div className="img-wrap">
                            <img
                              src="../@resource/images/@temp/team_icon_01.svg"
                              alt="DRX Fullname"
                            />
                          </div>
                          <p className="title en">DRX Fullname</p>
                        </div>
                        <div className="item team large">
                          <div className="img-wrap">
                            <img
                              src="../@resource/images/@temp/team_icon_02.svg"
                              alt="GEN Fullname"
                            />
                          </div>
                          <p className="title en">GEN Fullname</p>
                        </div>
                      </div>
                      <div className="item match large">
                        <p className="match-num">
                          MATCH <strong className="num">22</strong>
                        </p>
                        <div className="item team large">
                          <div className="img-wrap">
                            <img
                              src="../@resource/images/@temp/team_icon_03.svg"
                              alt="HLE Fullname"
                            />
                          </div>
                          <p className="title en">HLE Fullname</p>
                        </div>
                        <div className="item team large">
                          <div className="img-wrap">
                            <img
                              src="../@resource/images/@temp/team_icon_04.svg"
                              alt="BRO Fullname"
                            />
                          </div>
                          <p className="title en">BRO Fullname</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn-area">
                      <button className="btn large-x edge">
                        <i className="hexagon gold"></i>
                        <span>예측하기</span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
              {/* If we need pagination */}
              <div className="swiper-pagination"></div>
            </div>

            <div className="banner">
              <img
                src="../@resource/images/@temp/banner_store_375x70@3x.jpg"
                alt="부활권으로 콤보를 이어가세요!"
                className="img"
              />
            </div>

            <div className="in15">
              <div className="edge-box">
                <i className="hexagon"></i>
                <div className="item my-box">
                  <div className="item summary">
                    <p className="title">
                      <span className="en">HANBOM</span>님의 랭킹
                    </p>
                    <p className="data fc-gold fs-12">
                      상위{" "}
                      <span className="en">
                        <strong className="point fs-26">30</strong>%
                      </span>
                    </p>
                    <p className="sub-data fs-12">
                      <i className="tier master small"></i>{" "}
                      <strong className="en">Tier name</strong>
                    </p>
                  </div>

                  <div className="item summary">
                    <p className="title">
                      나의 <span className="en">COMBO</span>
                    </p>
                    <p className="data fc-gold fs-12 en">
                      <strong className="point fs-26">+3</strong>
                      <span>COMBO</span>
                    </p>
                    <p className="sub-data fs-12">
                      최고콤보 <span className="en fc-gold">+6</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* // #content */}

          <footer id="footer" className="footer"></footer>
        </div>
        {/* // #container */}
      </div>
    );
  }
}
