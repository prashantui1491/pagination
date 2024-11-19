import React, { useState, Suspense, lazy } from "react";

// Import the lazy component
const LazyContent = lazy(() => delayTimer(import("./LazyContent")));

const LazyLoadingWithSuspense = () => {
  const [showPreview, setShowPreview] = useState(false);

  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <label>
        <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
        Show preview
      </label>
      {showPreview && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyContent />
        </Suspense>
      )}
    </div>
  );
};

export default LazyLoadingWithSuspense;

  // Add a fixed delay so you can see the loading state
  function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }


  function delayTimer(promise){
    return new Promise(resolve =>{
      setTimeout(resolve, 2000)
    }).then(()=> promise)
  }

  
