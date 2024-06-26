import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLogining } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/");
    },
    onError: (error) => {
      toast.error("Invalid email or password.");
    },
  });

  return { login, isLogining };
}

export default useLogin;
