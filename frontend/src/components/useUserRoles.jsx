import { useAuth0 } from "@auth0/auth0-react";

export const useUserRoles = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading || !isAuthenticated) return [];

  return user?.["https://your-app/roles"] || [];
};