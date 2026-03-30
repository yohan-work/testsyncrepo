'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// UI components
import { Button, Input, Label } from '@/components/ui';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!email || !password || !name) {
      setError('All fields are required');
      return;
    }

    try {
      // Simulate API call
      await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });

      router.push('/login'); // Redirect to login page after successful registration
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <header className="w-full max-w-md p-4 bg-zinc-950 shadow-lg rounded-lg mb-8">
        <h1 className="text-white text-xl font-semibold">Register</h1>
      </header>

      <main className="w-full max-w-md p-4 bg-zinc-800 shadow-lg rounded-lg flex flex-col space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </form>

        <Button>Register</Button>

        <footer className="mt-4 text-center">
          <Link href="/login" className="text-blue-500 hover:underline">Already have an account?</Link>
        </footer>
      </main>
    </div>
  );
}