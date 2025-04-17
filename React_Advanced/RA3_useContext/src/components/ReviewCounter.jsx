import useReviewContext from '../contexts/ReviewContext';
export default function ReviewCounter() {
  const { reviewItems } = useReviewContext();
  return (
    <span>
      ({reviewItems.filter((item) => !item.isReviewed).length} /
      {reviewItems.length})
    </span>
  );
}
