import React from 'react';
import { Card, CardContent, CardHeader, Heading, Text, List, ListItem } from '@/components/ui';

const LoginPage = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="title">Login</Heading>
      </CardHeader>
      <CardContent>
        <Text variant="description">
          Please enter your credentials to access your account.
        </Text>

        <Heading size="subtitle">Terms and Conditions</Heading>
        <List type="unordered" size="sm">
          <ListItem>Agree to the terms and conditions by signing in.</ListItem>
          <ListItem>You must be at least 18 years old to use this service.</ListItem>
        </List>

        <Heading size="subtitle">Privacy Policy</Heading>
        <List type="ordered" size="sm">
          <ListItem>Our Privacy Policy outlines how we collect and use your data.</ListItem>
          <ListItem>We respect your privacy and are committed to protecting it.</ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default LoginPage;