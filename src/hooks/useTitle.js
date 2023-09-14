import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `EduMentor | ${title}`;
  }, [title]);
};
