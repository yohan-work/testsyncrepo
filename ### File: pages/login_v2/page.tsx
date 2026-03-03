import React from 'react';
import { Card } from '@/components/ui/card';
import { Grid, Input, Label, Button } from '@/components/ui';

const LoginV2Page = () => {
  return (
    <Card className="max-w-md mx-auto p-6">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <h1 className="text-center text-primary text-lg font-bold mb-4">Login</h1>
        </Grid>
        <Grid item xs={12}>
          <Label htmlFor="id">ID</Label>
          <Input
            id="id"
            name="id"
            type="text"
            placeholder="Enter your ID"
            className="w-full"
          />
        </Grid>
        <Grid item xs={12}>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full"
          />
        </Grid>
        <Grid item xs={12} className="flex justify-center">
          <Button variant="primary" type="submit" className="w-full">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default LoginV2Page;