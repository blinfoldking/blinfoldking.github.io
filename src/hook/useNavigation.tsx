"use client";

import { useRouter } from "next/navigation";
import { create } from "zustand";

const useNavigationStore = create((set) => {
  return {
    isExit: false,
    setExit: (isExit: boolean) => set({ isExit }),
  };
});

const useNavigation = () => {
  const router = useRouter();

  /* @ts-ignore */
  const exit = useNavigationStore((state) => state.isExit);
  /* @ts-ignore */
  const setExit = useNavigationStore((state) => state.setExit);

  const navigate = async (target: string) => {
    setExit(true);
    await new Promise((res) => setTimeout(res, 250));
    router.push(target);
    await new Promise((res) => setTimeout(res, 250));
    setExit(false);
  };

  return { navigate, exit };
};

export default useNavigation;
