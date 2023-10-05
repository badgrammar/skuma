import { clsx } from "clsx";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

const variants = cva(
    [
        "rounded-full",
        "font-semibold",
        "tracking-wide",
        "cursor-pointer",
        "inline-flex",
        "items-center",
        "justify-center",
        "relative",
        "transition",
        "active:scale-[0.96]",
        "outline-none",
        "disabled:cursor-not-allowed",

        ,
    ],
    {
        variants: {
            variant: {
                primary: [
                    "bg-indigo-500",
                    "text-white",
                    "font-semibold",
                    "shadow",
                    "hover:bg-indigo-600",
                    "hover:shadow-md",
                    "ring-indigo-500/70",
                    "ring-offset-2",
                    "focus-visible:ring-2",
                    "disabled:bg-indigo-500/50",
                    "disabled:shadow",
                ],
                secondary: [],
                destructive: [],
                link: [],
                ghost: [],
            },
            size: {
                small: ["text-sm", "py-1", "px-4"],
                default: ["py-2", "px-8", "leading-6"],
                large: ["text-lg", "py-3", "px-12"],
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

const Loading = () => {
    return (
        <div className="absolute inline-flex items-center">
            <div className="rounded-full border-2 border-b-transparent w-5 h-5 animate-spin border-[inherit]" />
        </div>
    );
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof variants> & {
        loading: boolean;
    };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, loading, children, ...rest }, ref) => {
        return (
            <button
                ref={ref}
                className={twMerge(variants({ variant, size, className }))}
                {...rest}
            >
                {loading && <Loading />}
                <span
                    className={clsx("transition", {
                        "opacity-0": loading,
                        "opacity-100": !loading,
                    })}
                >
                    {children}
                </span>
            </button>
        );
    }
);

Button.displayName = "Button";
export { Button };
