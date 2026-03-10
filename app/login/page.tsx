"use client";

import React from "react";
import { useAuth } from "@/util/AuthProvider";
import MainHeader from "@/components/MainHeader";

export default function Page() {
  const { user, gitHubSignIn, signOutUser } = useAuth();

  return (
    <main>
      <div className="bg-slate-50 min-h-screen bg-[url(https://picsum.photos/id/10/1920/1080?blur=3)]  bg-cover bg-fixed text-slate-900 font-sans flex flex-col items-center pb-10">
        <div className="fixed top-0 w-full z-10">
          <MainHeader />
        </div>
        <div className="w-full max-w-2xl mx-auto p-8 backdrop-blur-sm bg-white/30 rounded-2xl shadow-xl border border-slate-300 mt-40">
          <div className="mt-12 flex flex-col items-center w-full max-w-2xl p-6 h-max-content">
            <h1 className="text-3xl font-bold my-6">Login Page</h1>
            {user ? (
              <div className="flex flex-col items-center gap-4">
                <img
                  src={user.photoURL || "https://via.placeholder.com/100"}
                  alt="User Avatar"
                  className="w-24 h-24 rounded-full"
                />
                <h2 className="text-xl font-semibold">{user.displayName}</h2>
                <button
                  onClick={signOutUser}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={gitHubSignIn}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
              >
                Sign In with GitHub
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
