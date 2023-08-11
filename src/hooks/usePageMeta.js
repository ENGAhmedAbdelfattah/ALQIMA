/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import { useEffect } from "react";

const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", description);
    document
      .querySelector("meta[property='og:title']")
      .setAttribute("content", title);
    document
      .querySelector("meta[property='og:description']")
      .setAttribute("content", description);
    document
      .querySelector("meta[name='twitter:title']")
      .setAttribute("content", title);
    document
      .querySelector("meta[name='twitter:description']")
      .setAttribute("content", description);
  }, [title, description]);
};

export default usePageMeta;
