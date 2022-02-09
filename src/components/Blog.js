import React, { useState, useEffect } from "react";
import { readAllBlogposts } from "../utils/data.js";

export default function Blog() {
  const [blogpostArr, setBlogpostArr] = useState([]);

  useEffect(() => {
    let mounted = true;
    readAllBlogposts(setBlogpostArr, mounted);
    return () => {
      mounted = false;
    };
  }, [setBlogpostArr]);

  return (
    <div>
      <p>{typeof blogpostArr}</p>
      <p>{JSON.stringify(blogpostArr)}</p>
    </div>
  );
}
