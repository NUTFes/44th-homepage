"use client";
import React, { ReactNode } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

type AttentionItem = {
    title?: string;
    subtitle?: string;
    inform_title?: string;
    inform_time?: string;
    content?: ReactNode;
    center_content?: ReactNode;
    url?: string;
    url_label?: string;
    color?: "red";
    html?: ReactNode;
    icon?: StaticImageData | string;
    icon_name?: string;
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
            ${w === "big" ? "w-[366px]" : ""}
            ${w === "small" ? "w-[186px]" : "w-[297px]"}`}>
            <div className={`flex flex-col w-full bg-base_back border border-main rounded-sm
                ${pg === "none" ? "" : "p-6"}`}>
            {children && <div className={`flex flex-col
                ${pg === "none" ? "" : "gap-4"}`}>
                {children}
                </div>}
                <div className="flex flex-col w-full rounded-sm gap-4">
                    {items.map((item, index) => (
                        <div key={index}>
                            {Object.entries(item).map(([key, value], subIndex) => (
                                <div key={subIndex}>
                                    {key === "html" && value && (
                                        typeof value === "object" && "src" in value ? (
                                        <img src={value.src} alt="画像" />
                                    ) : (
                                        value
                                    )
                                    )}
                                    {key === "title" && typeof value === "string" && (
                                        <h2
                                            className={`font-tegomin text-h2 text-center drop-shadow ${
                                                item.color === "red" ? "text-logo_color" : "text-main"
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
                                        <div className="text-gray-900 text-body1 whitespace-pre-wrap break-words">
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: value
                                                    .replace(/<b>(.*?)<\/b>/g, '<span class="text-font-main font-bold">$1</span>')
                                                    .replace(/<red>(.*?)<\/red>/g, '<span class="text-logo_color font-bold">$1</span>')
                                            }
                                        }
                                        />
                                    </div>
                                    )}
                                    {key === "center_content" && typeof value === "string" && (
                                        <div className="text-gray-900 text-center whitespace-pre-wrap break-words text-body1">
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: value
                                                    .replace(/<b>(.*?)<\/b>/g, '<span class="text-font-main font-bold">$1</span>')
                                                    .replace(/<red>(.*?)<\/red>/g, '<span class="text-logo_color font-bold">$1</span>')
                                            }
                                        }
                                        />
                                    </div>
                                    )}
                                    {key === "div" && typeof value === "string" && (
                                        <div className="text-gray-900 whitespace-pre-wrap break-words">
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: value
                                                    .replace(/<black>(.*?)<\/black>/g, '<span class="text-font-main font-bold">$1</span>')
                                                    .replace(/<red>(.*?)<\/red>/g, '<span class="text-logo_color font-bold">$1</span>')
                                            }
                                        }
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
                                                {item.url_label || value}
                                            </a>
                                        </div>
                                    )}
                                    {key === "icon" && value && typeof value === "object" && "src" in value && (
                                        <div className="flex items-center gap-1">
                                            <div className="w-[109px] h-[70px] flex justify-center  overflow-hidden">
                                            <Image 
                                                src={value}
                                                alt={item.icon_name || "アイコン"} 
                                                className="object-contain"
                                            />
                                            </div>
                                            {item.icon_name && <p className="w-full text-center text-black text-body2">{item.icon_name}</p>}
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
