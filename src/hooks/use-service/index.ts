import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

const headers = {
  "Access-Control-Allow-Origin": "*",
};

export const useService = () => {
  const { invalidateQueries } = useQueryClient();
  return {
    useGet: (props: IUseService) => {
      const {
        url,
        key,
        params,
        onError,
        onSuccess,
        onFocus,
        onMount,
        enabled,
        initialData,
      } = props;
      const asyncGet = async () =>
        await axios.get(url, {
          headers,
          params: { ...params, ...(key[1] && { ...key[1] }) },
        });

      return useQuery(key, asyncGet, {
        enabled: false,
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
        ...(enabled !== undefined && { enabled }),
        ...(onFocus !== undefined && { refetchOnWindowFocus: onFocus }),
        ...(onMount !== undefined && { refetchOnMount: onMount }),
        ...(initialData && { initialData }),
      });
    },
    usePost: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncPost = async ({ payload }) =>
        await axios.post(url, payload, { headers });
      return useMutation(asyncPost, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    usePut: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncPut = async ({ payload }) =>
        await axios.put(url, payload, { headers });
      return useMutation(asyncPut, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    useDelete: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncDelete = async () => await axios.delete(url, { headers });
      return useMutation(asyncDelete, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    useUpdate: (props: IUseService) => {
      const { key } = props;
      invalidateQueries(key);
    },
  };
};
