import React, { useState, useEffect } from "react";

function useClient() {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return { client };
}

export default useClient;
