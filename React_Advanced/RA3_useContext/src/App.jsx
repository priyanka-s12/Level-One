import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Reporting from './pages/Reporting';
import Pending from './pages/Pending';
import Nav from './components/Nav';
import Review from './pages/Review';
// import ReviewContext from "./contexts/ReviewContext";
import { ReviewProvider } from './contexts/ReviewContext';
// import { useState } from "react";

export default function App() {
  // const [reviewItems, setReviewItems] = useState(initialReviewItems);

  // function toggleReviewItem(selectedUrl) {
  //   const updatedReviewItem = reviewItems.map((item) => {
  //     if (item.url !== selectedUrl) {
  //       return item;
  //     } else {
  //       return { ...item, isReviewed: !item.isReviewed };
  //     }
  //   });
  //   setReviewItems(updatedReviewItem);
  // }

  return (
    <>
      {/* <div>
        // this is getting updated by state
        <h1>Trying thing</h1>
        <p>
          Is reviewed: {reviewItems.filter((item) => item.isReviewed).length}
        </p>
        <ul>
          {reviewItems.map((item) => (
            <li
              style={{
                textDecoration: item.isReviewed ? "line-through" : "none",
              }}
              key={item.url}
              // onClick={() => console.log("Clicked on: ", item.url)}
              onClick={() => toggleReviewItem(item.url)}
            >
              {item.url}
            </li>
          ))}
        </ul>
      </div> */}
      {/* here I am updating array of data through state variable, so passing this to provider. Initially I was passing initialReviewItems, but now passing reviewItems */}
      {/* <ReviewContext.Provider value={{ reviewItems, toggleReviewItem }}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/pending" element={<Pending />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </Router>
      </ReviewContext.Provider> */}

      <ReviewProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/pending" element={<Pending />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </Router>
      </ReviewProvider>
    </>
  );
}
