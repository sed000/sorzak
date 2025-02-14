"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import { ArrowRight, Code, Smile } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-blue-100 to-blue-200">
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-blue-900 mb-4">
              Boolean as a Service
            </h1>
            <p className="text-xl text-blue-600 mb-8">
              Create custom boolean APIs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Simple to use</h2>
              <p className="text-gray-600">
                Open up an account and create many APIs as you need
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Smile className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Free</h2>
              <p className="text-gray-600">It's currently free to use</p>
            </div>
          </div>
        </div>
        <SignedOut>
          <div className="container mx-auto max-w-md text-center py-4">
            <SignUpButton mode="modal">
              <Button variant={"destructive"} className="rounded-full">Sign Up to use BaaS</Button>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          <section className="py-12">
            <div className="container mx-auto max-w-md text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <Link href={"/dashboard"} className="text-blue-500 underline">
                  <Button className="bg-blue-600 hover:bg-blue-700 rounded-full">Go to your Dashboard <ArrowRight></ArrowRight></Button>
                </Link>
              </h2>
            </div>
          </section>
        </SignedIn>
      </main>
    </div>
  );
}
