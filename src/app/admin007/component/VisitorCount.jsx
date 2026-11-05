"use client";

import { useEffect, useState } from "react";

const VisitorCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/visitor/count")
      .then((res) => res.json())
      .then((data) => setCount(data.totalVisitors));
  }, []);

  return (
    <div>
      <h2>Total Visitors</h2>
      <h1>{count}</h1>
    </div>
  );
};

export default VisitorCount;