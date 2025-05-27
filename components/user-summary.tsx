'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
import { Button } from './ui/button';
import { LogOut, User } from 'lucide-react';
import { useAppSelector } from '@/hooks/use-app-selector';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { logout } from '@/redux/features/auth-slice';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { mockOrders } from '@/data/mock-order';
import { RootState } from '@/redux/store';
import { authMessages, generalMessages } from '@/lib/messages';
import Container from './ui/container';
import Link from 'next/link';

const UserSummary = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  const { items: wishlistItems } = useAppSelector(
    (state: RootState) => state.wishlist
  );
  const { items: cartItems } = useAppSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
    toast({
      title: authMessages.logoutSuccessTitle,
      description: authMessages.logoutSuccessDescription,
    });
  };

  if (!user) {
    return (
      <Container className="text-center">
        <div className="max-w-md mx-auto">
          <User className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-4">{generalMessages.accessAccountTitle}</h1>
          <p className="text-muted-foreground mb-8">
            {generalMessages.accessAccountDescription}
          </p>
          <Button asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <Avatar className="h-20 w-20 mx-auto mb-4">
          <AvatarImage
            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/user/user.jpg`}
            alt={user.name}
          />
          <AvatarFallback className="text-lg">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Member since</span>
            <span>May 2024</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Orders / Cart</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Wishlist</span>
            <span>{wishlistItems.length}</span>
          </div>
        </div>
        <Separator className="my-4" />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="w-full" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{authMessages.signOutAccountTitle}</AlertDialogTitle>
              <AlertDialogDescription>
                {authMessages.signOutAccountDescription}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout}>
                Sign Out
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
}

export default UserSummary
