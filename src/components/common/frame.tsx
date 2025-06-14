"use client";
import React, { ReactNode } from "react";

type AttentionFrameProps = {
    w?: "big" | "small" | "board";
    pg?: "none" | "default";
    children?: ReactNode;
    className?: string;
};

const Frame: React.FC<AttentionFrameProps> = ({
    pg = "default",
    children,
    className
}) => {
    return (
        <div className="flex justify-center">
            <div
                className={`p-0.5 w-[90%] min-w-[200px] border-2 border-main bg-base_back rounded-sm`}>
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
