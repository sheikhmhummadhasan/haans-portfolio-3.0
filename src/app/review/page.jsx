export const instant = false
import ReviewComp from '@/component/ReviewComp';
import React, { Suspense } from 'react';

const ReviewPage = async () => {

  const prom = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URI}/review`,{
    cache: "no-store",
  });
  const res = await prom.json()

  return (
    <div>
      <Suspense fallback={`loading...`}>
        <ReviewComp activeReviews={res}/>
      </Suspense>
    </div>
  );
};

export default ReviewPage;