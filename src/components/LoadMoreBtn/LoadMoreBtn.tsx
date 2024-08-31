import React from "react";

interface LoadMoreBtnProps {
  loadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <div>
      <button onClick={loadMore}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
