// import { useContext } from "react";
// import ReviewContext from "../contexts/ReviewContext";
import useReviewContext from '../contexts/ReviewContext';

export default function Reporting() {
  //   const { reviewItems } = useContext(ReviewContext);
  const { reviewItems } = useReviewContext();

  return (
    <div className="app">
      {/* this is getting updated by context */}
      <h1>status</h1>
      <hr />
      <h2>Pending</h2>
      <p>{reviewItems.filter((entry) => !entry.isReviewed).length}</p>
      <hr />

      <h2>Reviewed</h2>
      <p>{reviewItems.filter((entry) => entry.isReviewed).length}</p>
    </div>
  );
}
