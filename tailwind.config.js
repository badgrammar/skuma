import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        colors: {
            primary: {
                1: "#FDFCFE",
                2: "#FBFAFF",
                3: "#F5F2FF",
                4: "#EDE9FE",
                5: "#E4DEFC",
                6: "#D7CFF9",
                7: "#C4B8F3",
                8: "#AA99EC",
                9: "#6E56CF",
                10: "#644FC1",
                11: "#5746AF",
                12: "#2F265F",
            },
            neutral: {
                1: "#FCFCFD",
                2: "#F9F9FB",
                3: "#F2F2F5",
                4: "#EBEBEF",
                5: "#E4E4E9",
                6: "#DDDDE3",
                7: "#D3D4DB",
                8: "#B9BBC6",
                9: "#8B8D98",
                10: "#7E808A",
                11: "#60646C",
                12: "#1C2024",
            },
            success: {
                1: "#FBFEFC",
                2: "#F2FCF5",
                3: "#E9F9EE",
                4: "#DDF3E4",
                5: "#CCEBD7",
                6: "#B4DFC4",
                7: "#92CEAC",
                8: "#5BB98C",
                9: "#30A46C",
                10: "#299764",
                11: "#18794E",
                12: "#193B2D",
            },
            danger: {
                1: "#FFFCFC",
                2: "#FFF7F7",
                3: "#FFEFEF",
                4: "#FFE5E5",
                5: "#FDD8D8",
                6: "#F9C6C6",
                7: "#F3AEAF",
                8: "#EB9091",
                9: "#E5484D",
                10: "#D93D42",
                11: "#C62A2F",
                12: "#641723",
            },
        },
        boxShadow: {
            sm: "0px 2px 10px 0px rgba(0, 0, 0, 0.07)",
            lg: [
                "0px 10px 20px -15px rgba(14, 18, 22, 0.2)",
                "0px 10px 38px -10px rgba(13, 18, 22, 0.35)",
            ],
        },
        borderRadius: {
            1: "4px",
            2: "8px",
            3: "12px",
            4: "16px",
            full: "999px",
        },
        spacing: {
            1: "5px",
            2: "10px",
            3: "15px",
            4: "20px",
            5: "25px",
            6: "35px",
            7: "45px",
            8: "65px",
            9: "80px",
        },
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                archivo: ["Archivo", "sans-serif"],
            },
        },
    },

    plugins: [forms],
};
