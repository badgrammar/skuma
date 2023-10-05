import logo from "/public/assets/logo.png";

export const ApplicationLogo = () => {
    return (
        <div className="flex gap-[10px] items-center">
            <img src={logo} className="w-[21px] h-max" alt="logo" />
            <span className="text-[30px] font-black">Skuma</span>
        </div>
    );
};
