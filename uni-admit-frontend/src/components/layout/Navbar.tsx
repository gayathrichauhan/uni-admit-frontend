"use client";

import Logo from "./Logo";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 h-16 border-b bg-background/95 backdrop-blur">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
                <Logo />

                <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Student Portal
          </span>
                </div>
            </div>
        </header>
    );
}