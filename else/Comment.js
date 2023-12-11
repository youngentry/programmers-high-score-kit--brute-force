import React, { useEffect, useState } from "react";

const LikeBtn = ({ comment }) => {
  // store에서 가져온 session
  const session = getSession();

  const [isLike, setIsLike] = useState(comment.isLike);
  const [isHate, setIsHate] = useState(comment.isHate);

  const handleLikeComment = () => {
    // like 요청 로직
    setIsLike(!isLike);
  };

  const handleHateComment = () => {
    // hate 요청 로직
    setIsHate(!isHate);
  };

  return (
    <div>
      <div onClick={handleLikeComment}>{isLike ? "FillLikeIcon" : "LikeIcon"}</div>
      <div onClick={handleHateComment}>{isHate ? "FillHateIcon" : "HateIcon"}</div>
    </div>
  );
};

const CommentList = () => {
  const [commentData, setCommentData] = useState(); // 초기 불러온 데이터
  const [commentList, setCommentList] = useState([...commentData]); // 렌더링 할 댓글

  const FetchComments = async () => {
    const response = fetch("url", "get");

    try {
      if (response.status) {
        // fetch 데이터 comment에 저장
        await setCommentData(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    FetchComments();
  }, []);

  useEffect(() => {
    // commentList 변경 사항 있을 때
  }, [setCommentList]);

  return (
    <div>
      {commentList.map((comment) => {
        <LikeBtn comment={comment} />;
      })}
    </div>
  );
};

export default Comment;
