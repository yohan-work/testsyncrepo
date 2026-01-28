import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background;">
      <Card className="w-full max-w-md;">
        <CardHeader>
          <CardTitle>회원가입</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4;">
          <div className="space-y-2;">
            <Label htmlFor="name">이름</Label>
            <Input id="name" placeholder="이름을 입력하세요" />
          </div>
          <div className="space-y-2;">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" placeholder="이메일 주소를 입력하세요" />
          </div>
          <div className="space-y-2;">
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" placeholder="비밀번호를 입력하세요" type="password" />
          </div>
          <div className="space-y-2;">
            <Label htmlFor="address">주소</Label>
            <Input id="address" placeholder="주소를 입력하세요" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">회원가입</Button>
        </CardFooter>
      </Card>
    </div>
  );
}