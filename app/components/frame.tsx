"use client";
import React, { ReactNode } from "react";

type AttentionFrameProps = {
    w?: "big" | "small" | "board";
    pg?: "none" | "default";
    children?: ReactNode;
    className?: string;
};

const Frame: React.FC<AttentionFrameProps> = ({
    w = "signboard",
    pg = "default",
    children,
    className
}) => {
    return (
        <div className="flex justify-center">
            <div
                className={`p-0.5 border-2 border-main bg-base_back rounded-sm
                ${w === "big" ? "w-[366px]" : ""}
                ${w === "small" ? "w-[186px]" : "w-[290px]"}`}>
                <div
                    className={`w-full border border-main rounded-sm
                    ${pg === "none" ? "" : "p-6"} ${className}`}>
                    <div className={`flex flex-col ${pg === "none" ? "" : "gap-4"}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
);
};

export default Frame;
