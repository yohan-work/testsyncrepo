'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const RegisterPageClient = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    setLoading(true);
    setError('');

    // Basic client-side validation
    if (!email || !password) {
      setError('Email and password are required');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name, phone, dob }),
      });

      if (!response.ok) {
        setError('Registration failed');
      } else {
        // Redirect to login or home page
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black">
      <header className="w-full max-w-3xl flex items-center justify-between px-4 py-2 bg-white dark:bg-black">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Project Logo"
            width={100}
            height={20}
          />
        </Link>
      </header>

      <main className="w-full max-w-3xl flex flex-col items-center justify-between py-8 px-4 bg-white dark:bg-black">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-zinc-950 dark:text-zinc-50">
          Register
        </h1>

        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="dob">Date of Birth (optional)</Label>
              <Input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>

          <Button disabled={loading} onClick={handleRegister}>
            {loading ? 'Loading...' : 'Register'}
          </Button>
        </form>

        <footer className="w-full max-w-3xl flex items-center justify-between px-4 py-2 bg-white dark:bg-black">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-zinc-950 dark:text-zinc-50">
              Sign in
            </Link>
          </p>
        </footer>
      </main>

      <footer className="w-full max-w-3xl flex items-center justify-between px-4 py-2 bg-white dark:bg-black">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © 2023 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default RegisterPageClient;