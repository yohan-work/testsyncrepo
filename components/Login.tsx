import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="id" >Username</Label>
            <Input id="id" placeholder="Enter your username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" >Password</Label>
            <Input id="password" placeholder="Enter your password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}; 

export default Login