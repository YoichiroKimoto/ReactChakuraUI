import { useCallback } from "react";

export const useSelectUser = () => {
  const onSelectUser = useCallback(() => {}, []);
  return { onSelectUser };
};
