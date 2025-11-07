"use client";

import {
  ComponentPropsWithoutRef,
  ElementType,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState
} from "react";
import { clsx } from "clsx";

type RevealProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Reveal<T extends ElementType = "section">({
  as,
  children,
  className,
  delay = 0,
  once = true,
  style,
  ...rest
}: RevealProps<T>) {
  const Component = (as ?? "section") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  const mergedStyle = delay
    ? { ...(style ?? {}), transitionDelay: `${delay}ms` }
    : style;

  return (
    <Component
      ref={ref as MutableRefObject<HTMLElement | null>}
      style={mergedStyle}
      className={clsx(
        "translate-y-6 opacity-0 transition-all duration-700 ease-out will-change-transform",
        visible && "translate-y-0 opacity-100",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
