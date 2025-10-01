"use client";
import React from "react";
import { motion, Transition } from "motion/react";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const isActive = active === item;
  return (
    <div onMouseEnter={() => setActive(item)} className="relative group">
      <div className="relative inline-block">
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          {item}
        </motion.p>
        {/* Thin gradient line under label */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute left-0 right-0 top-full mt-1 block h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 origin-center transition-all duration-300",
            isActive && "opacity-100 scale-x-100"
          )}
        />
        {/* Soft glow under the line */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-[6px] block h-2 w-1/2 bg-sky-500/35 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            isActive && "opacity-100"
          )}
        />
        {/* Sparkles on hover/active */}
        <div
          className={cn(
            "pointer-events-none absolute left-0 right-0 top-full mt-2 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            isActive && "opacity-100"
          )}
        >
          <SparklesCore
            className="h-full w-full"
            background="transparent"
            particleColor="#7dd3fc"
            minSize={1}
            maxSize={2}
            speed={2}
            particleDensity={40}
          />
        </div>
      </div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

type HoveredLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode;
};

export const HoveredLink = ({
  className,
  children,
  ...rest
}: HoveredLinkProps) => {
  return (
    <a
      {...rest}
      className={cn(
        "text-neutral-700 dark:text-neutral-200 hover:text-black ",
        className
      )}
    >
      {children}
    </a>
  );
};
