'use client';

import Link from 'next/link';
import { Input, Button } from "@/components/ui";

const SignupPage = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';
    const name = formData.get('name')?.toString() || '';

    // Basic validation
    if (!email || !password) {
      alert('Email and password are required.');
      return;
    }

    // Mock data storage
    console.log('Storing user:', { email, password, name });

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
      });

      if (!response.ok) {
        throw new Error('Failed to create user.');
      }

      alert('User created successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while creating the user.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">회원가입</h1>
        <Input
          id="email"
          type="email"
          placeholder="이메일"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
        />
        <Input
          id="password"
          type="password"
          placeholder="비밀번호"
          required
          minLength={8}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
        />
        <Input
          id="name"
          type="text"
          placeholder="이름 (선택사항)"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
        />
        <div className="mt-6">
          <Button type="submit" fullWidth>가입하기</Button>
          <Link href="/" passHref>
            <Button type="button" fullWidth variant="outline">취소</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;