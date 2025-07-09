"use client";

import useNavigation from "@/hook/useNavigation";

export default function NavLink(props: any) {
  const { target, children } = props;
  const { navigate } = useNavigation();

  return (
    <a onClick={() => navigate(target)} {...props}>
      {children}
    </a>
  );
}
