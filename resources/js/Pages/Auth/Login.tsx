import { ApplicationLogo } from "@/Components/ApplicationLogo";
import { InputText } from "@/Components/InputText";

export default function Login() {
    return (
        <div className="w-screen h-screen p-5 flex gap-5">
            <div className="w-full h-full bg-primary-3 rounded-3 p-[100px] flex justify-center items-center">
                <div>
                    <img
                        src="/assets/Saly-10.png"
                        alt="Saly-illust"
                        className="w-[410px]"
                    />
                </div>
            </div>
            <div className="w-full h-full px-[80px] flex items-center">
                <div className="w-full flex flex-col gap-5">
                    <div>
                        <ApplicationLogo />
                    </div>
                    <div>
                        <div className="text-8 text-neutral-12 font-medium">
                            Login
                        </div>
                        <div className="flex flex-col text-5 text-neutral-10">
                            <span>
                                Welcome to skuma - School Management Dashboard
                            </span>
                            <span>Please login to your account</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 ">
                        <div className="flex flex-col gap-1">
                            <div className="text-3 text-neutral-12 font-medium">
                                Username
                            </div>
                            <InputText
                                placeholder="username"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
