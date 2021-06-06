import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useAuth } from "hooks";
import { Request } from "utils";

export const useService = () => {
  const { headers } = useAuth();
  const client = useQueryClient();

  return {
    client,
    useGet: (props: IUseService) => {
      const {
        url,
        key,
        params,
        onError,
        onSuccess,
        onSettled,
        onFocus,
        onMount,
        enabled,
        initialData,
        keepPreviousData,
      } = props;
      const asyncGet = async () =>
        await Request.get(url, {
          params: { ...params, ...(key[1] && { ...key[1] }) },
          headers,
        });
      return useQuery(key, asyncGet, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
        ...(onSettled && { onSettled }),
        ...(enabled !== undefined && { enabled }),
        ...(onFocus !== undefined && { refetchOnWindowFocus: onFocus }),
        ...(onMount !== undefined && { refetchOnMount: onMount }),
        ...(initialData && { initialData }),
        ...(keepPreviousData && { keepPreviousData }),
      });
    },
    usePost: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncPost = async ({ payload }) =>
        await Request.post(url, payload, { headers });
      return useMutation(asyncPost, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    usePut: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncPut = async ({ payload }) =>
        await Request.put(url, payload, { headers });
      return useMutation(asyncPut, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    useDelete: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncDelete = async () => await Request.delete(url, { headers });
      return useMutation(asyncDelete, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
  };
};
