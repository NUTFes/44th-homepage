"use client";
import React, { ReactNode } from "react";

type AttentionItem = {
    title?: string;
    subtitle?: string;
    inform_title?: string;
    inform_time?: string;
    content?: ReactNode;
    url?: string;
    urlLabel?: string;
    imageSrc?: string;
    imageAlt?: string;
    color?: "other";
};

type AttentionFrameProps = {
    items?: AttentionItem[];
    w?: "big" | "small" | "board";
    pg?: "none" | "default";
    children?: ReactNode;
};

const Frame: React.FC<AttentionFrameProps> = ({ items = [], w = "signboard", pg = "default" ,children }) => {
    return (
        <div className={`flex flex-col items-center p-0.5 gap-4 border-2 border-main bg-base_back rounded-sm
            ${w === "big" ? "w-[366px]" : "w-[297px]"}
            ${w === "small" ? "w-[366px]" : "w-[186px]"}`}>
            <div className={`flex flex-col w-full bg-base_back border border-main rounded-sm
                ${pg === "none" ? "" : "p-6"}`}>
            {children && <div className={`flex flex-col
                ${pg === "none" ? "" : "gap-4"}`}>
                {children}
                </div>}
                <div className="flex flex-col w-full rounded-sm">
                    {items.map((item, index) => (
                        <div key={index}>
                            {Object.entries(item).map(([key, value], subIndex) => (
                                <div key={subIndex}>
                                    {key === "title" && typeof value === "string" && (
                                        <h2
                                            className={`font-tegomin text-h2 text-center drop-shadow ${
                                                item.color === "other" ? "text-logo_color" : "text-main"
                                            }`}
                                            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                                        >
                                            {value}
                                        </h2>
                                    )}
                                    {key === "subtitle" && typeof value === "string" && (
                                        <p className="text-center text-main text-body1 font-bold">{value}</p>
                                    )}
                                    {key === "inform_title" && typeof value === "string" && (
                                        <p className="text-main text-body1 font-bold">{value}</p>
                                    )}
                                    {key === "inform_time" && typeof value === "string" && (
                                        <p className="text-main">{value}</p>
                                    )}
                                    {key === "content" && typeof value === "string" && (
                                        <div className="text-gray-900 whitespace-pre-wrap break-words">
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: value
                                                    .replace(/<black>(.*?)<\/black>/g, '<span class="text-font-main font-bold">$1</span>')
                                                    .replace(/<red>(.*?)<\/red>/g, '<span class="text-logo_color font-bold">$1</span>')
                                            }}
                                        />
                                    </div>
                                    
                                    )}
                                    {key === "url" && typeof value === "string" && (
                                        <div className="text-center">
                                            <a
                                                href={value}
                                                className="text-lg text-font_link underline break-words"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {item.urlLabel || value}
                                            </a>
                                        </div>
                                    )}
                                    {key === "imageSrc" && typeof value === "string" && (
                                        <div className="flex flex-col items-center mt-2">
                                            <img
                                                src={value}
                                                alt={item.imageAlt || "Image"}
                                                className="max-w-full h-auto rounded-sm"
                                            />
                                            {item.imageAlt && (
                                                <p className="text-xs text-gray-600 mt-1">{item.imageAlt}</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Frame;
