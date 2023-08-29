import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Language School | ${title}`;
  }, [title]);
};
