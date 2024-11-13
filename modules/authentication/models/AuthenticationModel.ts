export type AuthenticationModal = {
  message: string;
  isAuthenticated?: boolean;
  user?: {
    username: string;
  };
};