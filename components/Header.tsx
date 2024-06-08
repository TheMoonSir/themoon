"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
    const pathname = usePathname();
  return (
    <header className="p-8 sticky m-auto mb-10">
      <div className="container flex justify-between items-center w-full m-auto">
        <div className="Logo">
          <h2 className="font-bold text-[24px]">
            TheMoon <span className="text-blue-400">.</span>
          </h2>
        </div>
      </div>
    </header>
  );
}
