type TextProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputText = ({ className, ...rest }: TextProps) => {
    return (
        <input
            type="text"
            className="w-[200px] h-7 px-3 py-1 text-3 rounded-1 border-1 border-neutral-10  placeholder:text-neutral-8  focus:ring-1 focus:border-neutral-12 focus:ring-neutral-12"
            {...rest}
        />
    );
};
