"use client";

import { useState, useEffect } from "react";

export function useTypewriter(
  text: string,
  typingSpeed: number = 150,
  deletingSpeed: number = 200,
  pauseDuration: number = 2000
) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (displayedText === "") {
        setIsBlinking(true);
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setIsBlinking(false);
        }, 500);
      } else {
        setIsBlinking(false);
        timeout = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (displayedText === text) {
        setIsBlinking(true);
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setIsBlinking(false);
        }, pauseDuration);
      } else {
        setIsBlinking(false);
        timeout = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    text,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return { text: displayedText, isBlinking };
}
