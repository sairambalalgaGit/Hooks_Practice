import React from "react";
import { useState, useEffect } from "react";

export function useIsOnline(){k
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  
    useEffect(() => {
      window.addEventListener("online", () => {
        setIsOnline(true);
      });
  
      window.addEventListener("offline", () => {
        setIsOnline(false);
      });
  
    } ,[]);
  
    return isOnline;
  }