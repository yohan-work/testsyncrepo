import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password, name } = body;

  // Basic validation
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
  }

  // Mock data storage (simulating database)
  console.log('Storing user:', { email, password, name });

  return NextResponse.json({ message: 'User created successfully!' }, { status: 201 });
}