"use client";
import React, { ReactNode } from "react";

type AttentionFrameProps = {
    w?: "big" | "small" | "board";
    pg?: "none" | "default";
    children?: ReactNode;
};

const Frame: React.FC<AttentionFrameProps> = ({
    w = "signboard",
    pg = "default",
    children,
}) => {
    return (
    <div
        className={`p-0.5 gap-4 border-2 border-main bg-base_back rounded-sm
        ${w === "big" ? "w-[366px]" : ""}
        ${w === "small" ? "w-[186px]" : "w-[297px]"}`}>
        <div
            className={`w-full bg-base_back border border-main rounded-sm
            ${pg === "none" ? "" : "p-6"}`}>
            <div className={`flex flex-col ${pg === "none" ? "" : "gap-4"}`}>
                {children}
            </div>
        </div>
    </div>
);
};

export default Frame;
