import { Button, Input, Label, Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>로그인</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="아이디">아이디:</Label>
            <Input id="아이디" placeholder="아이디를 입력하세요..." />
          </div >
        </CardContent>
        <CardFooter>
          <Button className="w-full">로그인</Button>
        </CardFooter>
      </Card>
    </div >
  );
}