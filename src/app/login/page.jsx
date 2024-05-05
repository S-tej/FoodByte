"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <section className="mt-8">
      <div className="ml-16 h-[370px] w-[800px] flex flex-col justify-center bg-[url('/login.jpg')] bg-no-repeat">
        <h1 className="text-center text-slate-200 text-4xl mb-4">Login</h1>
        <div className="block max-w-xs mx-auto">
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex gap-4 justify-center hover:bg-slate-200 bg-black"
          >
            <Image src={"/google.png"} alt={""} width={24} height={24} />
            Sign in with Google
          </button>
          <div className="text-center my-4 text-slate-200 border-t pt-4">
            Don't have an Account?{" "}
            <Link className="underline" href={"/register"}>
              SignUp here &raquo;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
