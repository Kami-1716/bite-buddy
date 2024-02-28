import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateNewUser = () => {
  const createNewUserRequest = async (user: CreateUserRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Error while creating the user");
    }
  };
  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createNewUserRequest);
  return { createUser, isLoading, isError, isSuccess };
};
