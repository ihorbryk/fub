import React from "react";
import { NotificationItem } from "../classes/NotificationItem";
import { NotificationContext } from "../contexts/notification";

export function useFetchData(fetchFn) {
  const notificationContext = React.useContext(NotificationContext);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const mountedRef = React.useRef(true);

  const isMounted = mountedRef.current;

  const fetchMemoFunction = React.useCallback(() => {
    fetchFn({
      setData,
      setLoading,
      setError,
      isMounted,
    });
  }, []);

  React.useEffect(async () => {
    fetchMemoFunction();
    if (error) {
      notificationContext.add(
        new NotificationItem("error", "Error fetch data", error)
      );
    }

    return () => {
      mountedRef.current = false;
    };
  }, [error]);

  return { data, loading, error };
}
