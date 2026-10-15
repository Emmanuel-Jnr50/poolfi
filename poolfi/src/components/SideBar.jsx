import React, { useState } from "react";
import "../index.css";
import logo from "../assets/poolfi logo.svg"
import HomeIcon from "./HomeIcon";
import HomeIconBold from "./HomeIconBold";
import WalletIcon from "./WalletIcon";
import WalletIconBold from "./WalletIconBold";
import AddIcon from "./AddIcon";
import AddIconBold from "./AddIconBold";
import HeartIcon from "./HeartIcon";
import HeartIconBold from "./HeartIconBold";
import DropIcon from "./DropIconBold";
import DropIconBold from "./DropIcon";
import NotificationIcon from "./NotificationIcon";
import NotificationIconBold from "./NotificationIconBold";
import SettingIcon from "./SettingIcon";
import SettingIconBold from "./SettingIconBold";

const SideBar = () => {
    const [activeHref, setActiveHref] = useState(() =>
        typeof window !== "undefined" ? window.location.pathname : "/"
    );
    const placeholderIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='4' y='4' width='16' height='16' rx='3' fill='none' stroke='%2389958e' stroke-width='2'/%3E%3C/svg%3E";
    const sections = [
        {
            title: "MAIN",
            links: [
                ["Home", "/", <HomeIcon color="#6B7488" width={24} height={24} className='scale-80' />, <HomeIconBold color="#6B7488" width={24} height={24} className='scale-80' />],
                ["Create Pools", "/create-pools", <AddIcon color="#6B7488" width={24} height={24} className='scale-80' />, <AddIconBold color="#6B7488" width={24} height={24} className='scale-80' />],
                ["My Pools", "/my-pools", <DropIconBold color="#6B7488" width={24} height={24} className='scale-80' />, <DropIcon color="#6B7488" width={24} height={24} className='scale-80' />],
                ["Impact", "/impact", <HeartIcon color="#6B7488" width={24} height={24} className='scale-80' />, <HeartIconBold color="#6B7488" width={24} height={24} className='scale-80' />],
                ["My Wallet", "/wallet", <WalletIcon color="#6B7488" width={24} height={24} className='scale-80' />, <WalletIconBold color="#6B7488" width={24} height={24} className='scale-80' />],
            ],
        },
        {
            title: "ACCOUNT",
            links: [
                ["Notifications", "/notifications", <NotificationIcon color="#6B7488" width={24} height={24} className='scale-80' />, <NotificationIconBold color="#6B7488" width={24} height={24} className='scale-80' />],
                ["Account Settings", "/settings", <SettingIcon color="#6B7488" width={24} height={24} className='scale-80' />, <SettingIconBold color="#6B7488" width={24} height={24} className='scale-80' />],
            ],
        },
    ];

    return (
        <aside className='box-border flex flex-col w-70 min-w-70 h-screen p-6 pb-4 bg-foam text-gray-800 font-sans'>
            <a className=""
                href="/"
                aria-label="Poolfi home"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    height: 48,
                    margin: "0 8px 28px",
                    textDecoration: "none",
                }}
            >
                <img src={logo} alt="" className='w-8.5 h-8.5' />
                <span className='text-[#1A1F2E] text-[23px] font-black tracking-[-0.5px] font-primary'>
                    PoolFi
                </span>
            </a>

            <nav aria-label="Dashboard navigation" className='flex-1'>
                {sections.map((section) => (
                    <section key={section.title} style={{ marginBottom: 30 }}>
                        <h2 className='text-ink/50 text-[11px] font-body font-medium tracking-[0.4px] mb-4'>
                            {section.title}
                        </h2>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                            {section.links.map(([label, href, icon, activeIcon]) => {
                                const active = href === activeHref;
                                return (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            onClick={(event) => {
                                                setActiveHref(href);
                                                event.currentTarget.animate(
                                                    [
                                                        { transform: "scale(0.94)" },
                                                        { transform: "scale(1)" },
                                                    ],
                                                    { duration: 220, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" }
                                                );
                                            }}
                                            aria-current={active ? "page" : undefined}
                                            className={`flex items-center gap-[20px] my-[9px] px-3 pl-5.5 py-[12px] font-body rounded-full text-[12.5px] no-underline tracking-[-0.2px] ${
                                                active ? "bg-white text-pool-blue  font-semibold" : "bg-transparent text-slate font-medium"
                                            }`}
                                        >
                                            {active && activeIcon ? activeIcon : typeof icon === "string" ? (
                                                <img
                                                    src={icon}
                                                    alt=""
                                                    aria-hidden="true"
                                                    style={{ width: 24, height: 24, objectFit: "cover" }}
                                                />
                                            ) : (
                                                icon
                                            )}
                                            {label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                ))}
            </nav>

            <div className='bg-white rounded-[16px] p-2.5 mt-auto border border-mist'>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 11,
                        padding: "8px 4px",
                    }}
                >
                    <div
                        aria-hidden="true"
                        className="grid place-items-center w-11 h-11 shrink-0 rounded-[12px] bg-splash font-primary text-white text-[18px] font-bold shadow-soft"
                    >
                        JD
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                        <div className="text-ink font-primary font-bold whitespace-nowrap overflow-hidden text-ellipsis text-[13px]"
                        >
                            Jane Doe
                        </div>
                        <div className="text-slate font-primary font-normal text-[12px] whitespace-nowrap overflow-hidden text-ellipsis "
                        >
                            jane@example.com
                        </div>
                    </div>
                    <button
                        type="button"
                        aria-label="Account options"
                        style={{
                            border: 0,
                            background: "transparent",
                            color: "#89958e",
                            fontSize: 20,
                            cursor: "pointer",
                        }}
                    >
                        ···
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
