"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

const announcementsData = [
  {
    icon: "ðŸ“¢",
    title: "Enrollment Period Opens!",
    description: "May 20 â€“ June 30, 2025",
    date: "05/16/2025"
  },
  {
    icon: "ðŸ“…",
    title: "Orientation Schedule",
    description: "The freshman orientation will begin on June 1, 2025",
    date: "05/10/2025"
  },
  {
    icon: "âš™ï¸",
    title: "System Maintenance",
    description: "The enrollment system will be down for maintenance on May 25, 2025",
    date: "05/05/2025"
  }
];

function useAnnouncementsLogic() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    console.log("Signing out...");
    setShowMenu(false);
    router.push("/");
  };

  return { showMenu, setShowMenu, handleSignOut };
}

const AnnouncementItem = ({ icon, title, description, date }) => (
  <div className="flex justify-between border-b border-gray-200 p-4 hover:bg-gray-100 transition duration-150">
    <div className="flex items-start">
      <div className="text-2xl mr-4">{icon}</div>
      <div>
        <div className="font-bold text-black">{title}</div>
        <div className="text-gray-700 text-sm mt-1">{description}</div>
      </div>
    </div>
    <div className="text-right text-sm text-gray-500 whitespace-nowrap">
      <div className="font-semibold text-gray-600">Date</div>
      <div>{date}</div>
    </div>
  </div>
);

const Announcements = () => {
  const { showMenu, setShowMenu, handleSignOut } = useAnnouncementsLogic();

  return (
    <div className="flex min-h-screen bg-white">
      <aside className="flex flex-col w-80">
        <div className="flex flex-col items-center bg-blue-600 p-5 shadow-md">
          <Image
            src="/sample.jpg"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full object-cover mb-4"
          />
          <h5 className="text-xl font-bold text-black mt-2">John Doe</h5>
        </div>

        <nav className="flex flex-col gap-11 bg-yellow-600 shadow-md text-center py-10 flex-grow">
          <Link href="/faculty/dashboard" className="text-lg px-6 py-4 hover:bg-yellow-500">
            Dashboard
          </Link>
          <Link href="/faculty/section" className="text-lg px-6 py-4 font-bold bg-yellow-400 hover:bg-yellow-500">
            Section
          </Link>
          <Link href="/faculty/task" className="text-lg px-6 py-4 hover:bg-yellow-500">
            Task
          </Link>
          <Link href="/faculty/schedule" className="text-lg px-6 py-4 hover:bg-yellow-500">
            Schedule
          </Link>
          <Link href="/faculty/grades" className="text-lg px-6 py-4 hover:bg-yellow-500">
            Grades
          </Link>
        </nav>
      </aside>

      <main className="flex flex-col flex-1">
        <header className="flex items-center justify-center relative">
          <h1 className="bg-yellow-500 w-full text-center text-4xl font-bold text-black py-20">ANNOUNCEMENTS</h1>
          <div className="absolute top-4 right-4">
            <button
              aria-label="Toggle menu"
              onClick={() => setShowMenu(!showMenu)}
              className="text-black focus:outline-none cursor-pointer"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
{showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/faculty/profile"
                      className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                      onClick={() => setShowMenu(false)}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faculty/settings"
                      className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                      onClick={() => setShowMenu(false)}
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>

        <section className="w-full max-w-3xl mx-auto my-6 p-5 bg-white border border-gray-300 rounded-md shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Announcements</h2>
          <div className="divide-y divide-gray-200">
            {announcementsData.map((item, index) => (
              <AnnouncementItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Announcements;