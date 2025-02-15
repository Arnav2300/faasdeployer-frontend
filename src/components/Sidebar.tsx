import { useState } from "react";
import { HugeiconsIcon } from '@hugeicons/react';
import { Home11Icon, Menu02Icon, MultiplicationSignIcon, Profile02Icon, Setting07Icon } from '@hugeicons/core-free-icons';
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex">
            <div className={`fixed inset-y-0 left-0 md:inset-y-4 md:left-4 transform md:fixed md:translate-x-0 md:w-48 ${isOpen ? "translate-x-0" : "-translate-x-full"} w-48 bg-[#0B1A2B] text-red-500 transition-transform duration-300 ease-in-out p-4 md:rounded-2xl rounded-r-2xl`}>
                <button onClick={() => setIsOpen(false)} className="md:hidden mb-4">
                    <HugeiconsIcon icon={MultiplicationSignIcon} className="text-white w-6 h-6" />
                </button>
                <nav className="rounded">
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                            <HugeiconsIcon icon={Home11Icon} className="w-5 h-5" />
                            <span>Home</span>
                        </li>
                        <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                            <HugeiconsIcon icon={Profile02Icon} className="w-5 h-5" />
                            <span>Profile</span>
                        </li>
                        <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                            <HugeiconsIcon icon={Setting07Icon} className="w-5 h-5" />
                            <span>Settings</span>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={`p-2 fixed top-4 left-4 bg-gray-900 text-white rounded ${isOpen ? "hidden" : "block  "} md:hidden`}
            >
                <HugeiconsIcon icon={Menu02Icon} className="w-6 h-6" />
            </button>
        </div >

    );
}