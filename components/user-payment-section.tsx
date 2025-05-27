'use client'
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Plus, Trash2 } from "lucide-react";
import { mockPaymentMethods } from "@/data/mock-payment-method";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const UserPaymentSection = () => {
  const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods);
  const { toast } = useToast();
  const handleDeletePaymentMethod = (paymentId: string) => {
    setPaymentMethods(
      paymentMethods.filter((payment) => payment.id !== paymentId)
    );
    toast({
      title: "Payment method removed",
      description: "The payment method has been removed from your account.",
    });
  };
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Manage your saved payment methods</CardDescription>
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Payment Method
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockPaymentMethods.map((payment) => (
            <div key={payment.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-6 bg-muted rounded flex items-center justify-center text-xs font-medium">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/payment/${payment.icon}.png` || payment.type}
                      alt={payment.type}
                      width={24}
                      height={24}
                      className="h-10 w-10"
                    />
                  </div>
                  <div>
                    <p className="font-medium">
                      •••• •••• •••• {payment.last4}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Expires {payment.expiryMonth}/{payment.expiryYear}
                      {payment.isDefault && " • Default"}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Remove payment method?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          remove this payment method from your account.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeletePaymentMethod(payment.id)}
                        >
                          Remove
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserPaymentSection;
