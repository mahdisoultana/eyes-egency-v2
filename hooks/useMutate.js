import React, { useState, useMemo, useEffect } from "react";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { postMethod } from "../utils/mutateFn";

function useMutate(
  url,
  method,
  { pending, success, error } = {
    pending: "we are requesting ⏳",
    success: "your action successed ✨",
    error: "Something went wrong 🤯",
  },
) {
  let [response, setResponse] = useState(null);

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    (data) =>
      toast.promise(async () => await postMethod(data, url, method), {
        pending,
        success,
        error,
      }),

    {
      onSuccess: (data) => {
        setResponse(data);
      },
      onError: (e) => {
        setResponse(e);
      },
    },
  );
  response = useMemo(() => {
    return response;
  }, [response]);

  /////////
  useEffect(() => {
    if (response?.error) {
      toast.error(response.error);
    }
  }, [response]);
  /////////////////
  return { response, isLoading, isError, mutate };
}

export default useMutate;
