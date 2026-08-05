import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-dark";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  href: string;
}

interface ActionButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  "outline-dark": "btn-outline-dark",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className, icon } = props;
  const classes = cn(variantClass[variant], className);

  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http") || props.href.startsWith("tel:");
    if (isExternal) {
      return (
        <a href={props.href} className={classes}>
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  const { variant: _v, children: _c, className: _cl, icon: _i, href, ...rest } =
    props as ActionButtonProps;

  return (
    <button className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
