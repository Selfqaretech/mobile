import axios, { AxiosError } from "axios";
import { API_URL, TENNANT_ID } from ".";
import {
  AxiosUserProps,
  LoginProps,
  RegisterProps,
  UserProps,
} from "@src/@types/auth/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useUserAsyncStore from "@src/hooks/useUserAsyncStore";
import { useSession } from "@src/component/wrappers/Auth/ctx";

axios.defaults.headers.common["x-tenant-id"] = TENNANT_ID;
axios.defaults.baseURL = API_URL;

type OTPProps = Pick<UserProps, "email"> & { otp: string };

const login = async (props: LoginProps) => {
  const response = await axios.post<AxiosUserProps>("/api/auth/login", {
    email: props.email,
    username: props.email ? undefined : props.username,
    password: props.password,
  });
  return response.data;
};

const register = async (props: RegisterProps) => {
  const response = await axios.post<{ message: string }>("/api/auth/login", {
    email: props.email,
    username: props.username,
    password: props.password,
  });
  return response.data;
};

const getUser = async () => {
  const response = await axios.get<AxiosUserProps>("/api/auth");
  return response.data;
};

const verifyOTP = async (props: OTPProps) => {
  const response = await axios.post<{ message: string }>("/api/auth/otp", {
    email: props.email,
    otp: props.otp,
  });
  return response.data;
};

const resendOTP = async (props: Pick<UserProps, "email">) => {
  const response = await axios.post<{ message: string }>(
    "/api/auth/otp/resend",
    {
      email: props.email,
    }
  );
  return response.data;
};

// REACT QUERY HOOKS

export const useLoginMutation = () => {
  const { storeUser } = useUserAsyncStore();
  const { signIn } = useSession() || {};
  const queryClient = useQueryClient();
  const loginMutation = useMutation<AxiosUserProps, AxiosError, LoginProps>({
    mutationFn: login,
    onSuccess: async (data) => {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data?.data?.token}`;
      const storingUser = { ...data?.data?.user, token: data?.data?.token };
      await storeUser(storingUser);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      signIn?.();
    },
  });
  return loginMutation;
};

export const useGetUserQuery = (props?: { skip?: boolean }) => {
  const { getStoredUser } = useUserAsyncStore();
  const { signIn, signOut } = useSession() || {};
  const getUserQuery = useQuery({
    queryFn: async (): Promise<Partial<UserProps>> => {
      const storedUser = await getStoredUser();
      if (storedUser?.token) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${storedUser?.token}`;
        const user = await getUser();
        signIn?.();
        return { ...user?.data?.user, token: user?.data?.token };
      } else {
        signOut?.();
        return {};
      }
    },
    queryKey: ["auth"],
    enabled: !props?.skip,
    onError: () => {
      signOut?.();
    },
  });
  return getUserQuery;
};

export const useRegisterMutation = () => {
  const registerMutation = useMutation({
    mutationFn: register,
  });
  return registerMutation;
};

export const useVerifyOTPMutation = () => {
  const verifyOTPMutation = useMutation({
    mutationFn: verifyOTP,
  });
  return verifyOTPMutation;
};

export const useResendOTPMutation = () => {
  const resendOTPMutation = useMutation({
    mutationFn: resendOTP,
  });
  return resendOTPMutation;
};

export const useLogoutMutation = () => {
  const { clearStoredUser } = useUserAsyncStore();
  const { signOut } = useSession() || {};
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await new Promise((resolve) => {
        clearStoredUser();
        signOut?.();
        resolve(true);
      });
    },
  });
  return logoutMutation;
};
