import { createContext, useContext } from 'react';
import { useState } from 'react';

const ReviewContext = createContext();

// export default ReviewContext;
//custom hook - we see in libraries
const useReviewContext = () => useContext(ReviewContext);
export default useReviewContext;

const initialReviewItems = [
  {
    url: 'https://github.com/repo1',
    isReviewed: false,
  },
  {
    url: 'https://github.com/repo2',
    isReviewed: false,
  },
  {
    url: 'https://github.com/repo3',
    isReviewed: false,
  },
];

export function ReviewProvider({ children }) {
  const [reviewItems, setReviewItems] = useState(initialReviewItems);

  function toggleReviewItem(selectedUrl) {
    const updatedReviewItem = reviewItems.map((item) => {
      if (item.url !== selectedUrl) {
        return item;
      } else {
        return { ...item, isReviewed: !item.isReviewed };
      }
    });
    setReviewItems(updatedReviewItem);
  }

  return (
    <ReviewContext.Provider value={{ reviewItems, toggleReviewItem }}>
      {children}
    </ReviewContext.Provider>
  );
}
