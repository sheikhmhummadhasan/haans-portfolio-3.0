"use client";

import { useEffect } from "react";

const VisitorTracker = () => {
  useEffect(() => {
    fetch("/api/visitor", {
      method: "POST",
    });
  }, []);

  return null;
};

export default VisitorTracker;