
import ReviewComp from '@/component/ReviewComp';
import React, { Suspense } from 'react';

const ReviewPage = async () => {
  'use cache'
  const prom = await fetch(`http://localhost:5000/review`);
  const res = await prom.json()
  return (
    <div>
      <ReviewComp activeReviews={res}/>
    </div>
  );
};

export default ReviewPage;