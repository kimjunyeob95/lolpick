import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Pages/Main/Main";

import PlayList from "./Pages/Play/List/List";
import PlayDetail from "./Pages/Play/Detail/Detail";
import PlayPrediction from "./Pages/Play/Prediction/Prediction";

import Community from "./Pages/Community/Main/Main";
import CommunityWrite from "./Pages/Community/Write/Write";
import CommunityDetail from "./Pages/Community/Detail/Detail";

import Mypage from "./Pages/Mypage/Mypage";
import MyModify from "./Pages/Mypage/Modify/Modify";
import MyCombo from "./Pages/Mypage/MyCombo/MyCombo";
import MyPoint from "./Pages/Mypage/MyPoint/MyPoint";
import MyWrite from "./Pages/Mypage/MyWrite/MyWrite";
import MyWriteDetail from "./Pages/Mypage/MyWriteDetail/MyWriteDetail";
import MyComment from "./Pages/Mypage/MyComment/MyComment";
import MyCommentDetail from "./Pages/Mypage/MyCommentDetail/MyCommentDetail";
import Notice from "./Pages/Mypage/Notice/Notice";
import NoticeDetail from "./Pages/Mypage/NoticeDetail/NoticeDetail";
import Setting from "./Pages/Mypage/Setting/Setting";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />

          {/* 경기 */}
          <Route path="/play/list" component={PlayList} />
          <Route path="/play/detail/:id" component={PlayDetail} />
          <Route path="/play/prediction" component={PlayPrediction} />

          {/* 커뮤니티 */}
          <Route path="/community/" component={Community} />
          <Route path="/community/write" component={CommunityWrite} />
          <Route path="/community/detail/:id" component={CommunityDetail} />

          {/* 마이페이지 */}
          <Route exact path="/mypage" component={Mypage} />
          <Route path="/mypage/modify" component={MyModify} />
          <Route path="/mypage/mycombo" component={MyCombo} />
          <Route path="/mypage/mypoint" component={MyPoint} />
          <Route path="/mypage/mywrite" component={MyWrite} />
          <Route path="/mypage/mywrite/:id" component={MyWriteDetail} />
          <Route path="/mypage/mycomment" component={MyComment} />
          <Route path="/mypage/mycomment/:id" component={MyCommentDetail} />
          <Route path="/mypage/notice" component={Notice} />
          <Route path="/mypage/notice/:id" component={NoticeDetail} />
          <Route path="/mypage/setting" component={Setting} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
