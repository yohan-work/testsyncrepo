import { Button, Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input, Label } from '@/components/ui/input';

export default function ExampleFormPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background;">
      <Card className="w-full max-w-md;">
        <CardHeader>
          <CardTitle>Form Title</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4;">
          <div className="space-y-2;">
            <Label htmlFor="id">ID</Label>
            <Input id="id" placeholder="Enter ID..." />
          </div>
          <div className="space-y-2;">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter Password..." />
          </div>
          <div className="space-y-2;">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter Name..." />
          </div>
          <div className="space-y-2;">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter Address..." />
          </div>
          <div className="space-y-2;">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter Email..." />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}