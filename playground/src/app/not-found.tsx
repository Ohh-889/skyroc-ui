'use client';

import { ArrowLeft, Home, Mail, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl" />

        <div
          className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl"
          style={{ animationDelay: '1s' }}
        />

        <div
          className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-pink-500/5 blur-3xl"
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Big 404 number */}
        <div className="relative mb-8">
          <h1 className="animate-pulse bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-9xl font-bold text-transparent md:text-[12rem]">
            404
          </h1>

          <div
            className="absolute inset-0 animate-pulse text-9xl font-bold text-purple-500/20 blur-sm md:text-[12rem]"
            style={{ animationDelay: '0.3s' }}
          >
            404
          </div>
        </div>

        {/* Main heading */}
        <div className="mb-6 space-y-2">
          <h2 className="mb-4 animate-bounce text-3xl font-bold text-white md:text-5xl">Page not found</h2>

          <p className="animate-fade-in text-lg text-slate-300 md:text-xl">
            Sorry, the page you visited doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8 animate-pulse">
          <p className="mx-auto max-w-md leading-relaxed text-slate-400">
            Don&apos;t worry, this happens. You can return to the home page or try searching for what you&apos;re
            looking for.
          </p>
        </div>

        {/* Action buttons */}
        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/">
            <button className="inline-flex items-center rounded-lg border-0 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-pink-600 hover:shadow-xl">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </button>
          </Link>

          <button
            className="inline-flex items-center rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-slate-500 hover:bg-slate-800/50 hover:text-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </button>

          <button
            className="inline-flex items-center rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-slate-500 hover:bg-slate-800/50 hover:text-white"
            onClick={() => window.location.reload()}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Reload
          </button>
        </div>

        {/* Quick navigation */}
        <div className="animate-bounce">
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-slate-400 uppercase">Common Pages</h3>

          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/button">
              <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-slate-600 hover:bg-slate-700/50 hover:text-white">
                Button Component
              </span>
            </Link>

            <Link href="/project">
              <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-slate-600 hover:bg-slate-700/50 hover:text-white">
                Project Page
              </span>
            </Link>

            <Link href="/">
              <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-slate-600 hover:bg-slate-700/50 hover:text-white">
                Docs Home
              </span>
            </Link>
          </div>
        </div>

        {/* Contact information */}
        <div className="mt-16 animate-pulse border-t border-slate-700/50 pt-8">
          <p className="text-sm text-slate-500">
            If the problem persists, please
            <a
              className="ml-1 inline-flex items-center text-purple-400 transition-colors hover:text-purple-300"
              href="mailto:support@example.com"
            >
              <Mail className="mr-1 h-3 w-3" />
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
