import { useContext } from 'react';
// import ReviewContext from "../contexts/ReviewContext";
import useReviewContext from '../contexts/ReviewContext';

export default function Review() {
  //   const { reviewItems, toggleReviewItem } = useContext(ReviewContext);
  const { reviewItems, toggleReviewItem } = useReviewContext();
  return (
    <div>
      {/* this is getting updated by state */}
      {/* <h1>Trying thing</h1> */}
      <p>Is reviewed: {reviewItems.filter((item) => item.isReviewed).length}</p>
      <ul>
        {reviewItems.map((item) => (
          <li
            style={{
              textDecoration: item.isReviewed ? 'line-through' : 'none',
            }}
            key={item.url}
            // onClick={() => console.log("Clicked on: ", item.url)}
            onClick={() => toggleReviewItem(item.url)}
          >
            {item.url}
          </li>
        ))}
      </ul>
    </div>
  );
}
