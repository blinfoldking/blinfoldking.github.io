"use client";

import {
  usePathname,
  useRouter,
  useSelectedLayoutSegment,
} from "next/navigation";
import { useEffect } from "react";
import { create } from "zustand";

interface NavigationState {
  isExit: boolean;
  setExit: (isExit: boolean) => {};
}

const useNavigationStore = create((set) => {
  return {
    isExit: false,
    setExit: (isExit: boolean) => set({ isExit }),
  };
});

const useNavigation = () => {
  const router = useRouter();

  const exit = useNavigationStore((state: any) => state.isExit);
  const setExit = useNavigationStore((state: any) => state.setExit);
  const segment = useSelectedLayoutSegment();

  const pathname = usePathname();

  useEffect(() => {
    setExit(false);
  }, [pathname]);

  const navigate = async (target: string) => {
    if (target === pathname) {
      return;
    }
    setExit(true);
    await new Promise((res) => setTimeout(res, 500));
    router.push(target);
  };

  const goBack = async () => {
    setExit(true);
    await new Promise((res) => setTimeout(res, 500));
    router.back();
  };

  return { navigate, exit, pathname, setExit, goBack, segment };
};

export default useNavigation;
