"use client";

import useNavigation from "@/hook/useNavigation";

export default function NavLink({
  target,
  back,
  link,
  children,
  ...props
}: {
  link?: boolean;
  target?: string;
  back?: true;
  children: React.ReactNode;
  className?: string;
}) {
  const { navigate, goBack } = useNavigation();

  const onclick = () => {
    if (!back) {
      navigate(target);
    } else {
      goBack();
    }
  };

  return link ? (
    <a onClick={onclick} {...props}>
      {children}
    </a>
  ) : (
    <div onClick={onclick} {...props}>
      {children}
    </div>
  );
}
