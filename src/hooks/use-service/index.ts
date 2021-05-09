import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

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
      } = props;
      const asyncGet = async () => await axios.get(url, { params });
      return useQuery(key, asyncGet, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
        ...(enabled && { enabled }),
        ...(onFocus && { refetchOnWindowFocus: onFocus }),
        ...(onMount && { refetchOnMount: onMount }),
      });
    },
    usePost: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncPost = async ({ payload }) => await axios.post(url, payload);
      return useMutation(asyncPost, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    usePut: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncPut = async ({ payload }) => await axios.put(url, { payload });
      return useMutation(asyncPut, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    useDelete: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncDelete = async () => await axios.delete(url);
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
