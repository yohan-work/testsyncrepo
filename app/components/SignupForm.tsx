import React from 'react';
import { Button, Input, Label, Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/';

export default function SignupForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>회원가입</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="id">아이디</Label>
          <Input id="id" placeholder="아이디를 입력하세요" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">비밀번호</Label>
          <Input id="password" placeholder="비밀번호를 입력하세요" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">이메일</Label>
          <Input id="email" placeholder="이메일 주소를 입력하세요" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">가입하기</Button>
      </CardFooter>
    </Card>
  );
}