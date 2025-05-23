"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/features/auth-slice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Container from "@/components/ui/container";
import { formMessages } from "@/lib/messages";

// Define the form schema with Zod
const registerSchema = z
  .object({
    name: z.string().min(2, { message: formMessages.nameValidation }),
    email: z.string().email({ message: formMessages.invalidEmail }),
    password: z
      .string()
      .min(8, { message: formMessages.passwordValidation })
      .regex(/[A-Z]/, {
        message: formMessages.passwordCharValidation1,
      })
      .regex(/[a-z]/, {
        message: formMessages.passwordCharValidation2,
      })
      .regex(/[0-9]/, { message: formMessages.passwordCharValidation3 }),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: formMessages.passwordMissMatch,
    path: ["confirmPassword"],
  });

// Infer the type from the schema
type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { toast } = useToast();

  // Initialize React Hook Form with Zod validation
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (values: RegisterFormValues) => {
    setIsLoading(true);

    try {
      // In a real app, you would register the user with your backend
      // For demo purposes, we'll just simulate a successful registration
      setTimeout(() => {
        dispatch(
          login({
            id: "1",
            name: values.name,
            email: values.email,
          })
        );

        toast({
          title: formMessages.registerSuccessTitle,
          description: formMessages.registerSuccessDescription,
        });

        router.push("/");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: formMessages.registerErrorTitle,
        description: formMessages.registerErrorDescription,
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <Container className="max-w-md mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="text-muted-foreground mt-2">
          Join Elegance to start shopping
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-primary hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">
              Already have an account?
            </span>{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </form>
      </Form>
    </Container>
  );
}
