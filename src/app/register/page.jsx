"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function RegisterPage() { 
  return (
    <section className="mt-8">
      <div className="ml-16 h-[370px] w-[800px] flex flex-col justify-center bg-[url('/login.jpg')] bg-no-repeat">
        <h1 className="text-center text-slate-200 text-4xl mb-4">Register</h1>
        <div className="block max-w-xs mx-auto">
          <button
            onClick={() => signIn("google", { callbackUrl: "/profile" })}
            className="flex gap-4 justify-center hover:bg-slate-200 bg-black"
          >
            <Image src={"/google.png"} alt={""} width={24} height={24} />
            Sign up with Google
          </button>
          <div className="text-center my-4 text-slate-200 border-t pt-4">
            Existing account?{" "}
            <Link className="underline" href={"/login"}>
              Login here &raquo;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
