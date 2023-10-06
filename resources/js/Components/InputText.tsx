import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

const variants = cva(
    [
        "text-neutral-12",
        "rounded-1",
        "border-1",
        "placeholder:text-neutral-8",
        "focus:ring-2",
        "focus:border-state-focus-ring",
        "focus:ring-state-focus-ring",
        "disabled:bg-disabled-background",
        "disabled:text-disabled-content",
        "disabled:border-disabled-content",
        "border-neutral-10",
    ],
    {
        variants: {
            size: {
                MD: ["w-[200px]", "h-7", "px-3", "py-1", "text-3"],
                SM: ["w-[150px]", "h-6", "px-2", "py-1", "text-2"],
            },
        },
        defaultVariants: {
            size: "MD",
        },
    }
);

type TextProps = React.InputHTMLAttributes<HTMLInputElement> &
    VariantProps<typeof variants>;

const InputText = forwardRef<HTMLInputElement, TextProps>(
    ({ className, size, ...rest }, ref) => {
        return (
            <input
                ref={ref}
                type="text"
                className={twMerge(variants({ size, className }))}
                {...rest}
            />
        );
    }
);

InputText.displayName = "InputText";
export { InputText };
