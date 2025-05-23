"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { login } from "@/redux/features/auth-slice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Container from "@/components/ui/container"
import { formMessages } from "@/lib/messages"

// Define the form schema with Zod
const loginSchema = z.object({
  email: z.string().email({ message: formMessages.invalidEmail }),
  password: z.string().min(6, { message: formMessages.passwordValidation }),
  rememberMe: z.boolean(),
})

// Infer the type from the schema
type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const { toast } = useToast()

  // Initialize React Hook Form with Zod validation
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true)

    try {
      // In a real app, you would validate credentials with your backend
      // For demo purposes, we'll just simulate a successful login
      setTimeout(() => {
        dispatch(
          login({
            id: "1",
            name: "John Doe",
            email: values.email,
          }),
        )

        toast({
          title: formMessages.loginSuccessTitle,
          description: formMessages.loginSuccessDescription,
        })

        router.push("/")
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      toast({
        title: formMessages.loginErrorTitle,
        description: formMessages.loginErrorDescription,
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  return (
    <>
      <Container className="max-w-md mx-auto py-16 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to your account to continue</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Remember me</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Don't have an account?</span>{" "}
              <Link href="/register" className="text-primary hover:underline">
                Create an account
              </Link>
            </div>
          </form>
        </Form>
      </Container>
    </>
  )
}
