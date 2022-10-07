import { ChatAltIcon, CogIcon, LogoutIcon, ShoppingCartIcon, TemplateIcon, UserIcon } from "@heroicons/react/outline"

export const navLinks = [
    {
        id: 0,
        title: "Dashboard",
        icon: <TemplateIcon className="nav-icon" />
    },
    {
        id: 1,
        title: "Market",
        icon: <ShoppingCartIcon className="nav-icon" />
    },
    {
        id: 2,
        title: "Portfolio",
        icon: <UserIcon className="nav-icon" />
    },
    {
        id: 3,
        title: "News",
        icon: <ChatAltIcon className="nav-icon" />
    },
    {
        id: 4,
        title: "Setting",
        icon: <CogIcon className="nav-icon" />
    },
    {
        id: 5,
        title: "Logout",
        icon: <LogoutIcon className="nav-icon" />
    },
];