"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { subscribeMessage } from "@/lib/messages"

// Define the form schema with Zod
const newsletterSchema = z.object({
  email: z.string().email({ message: subscribeMessage.subscribeFailed }),
})

// Infer the type from the schema
type NewsletterFormValues = z.infer<typeof newsletterSchema>

export default function Newsletter() {
  const { toast } = useToast()

  // Initialize React Hook Form with Zod validation
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (values: NewsletterFormValues) => {
    // Here you would typically send the email to your API
    toast({
      title: "Success!",
      description: subscribeMessage.subscribeSuccess,
    })

    form.reset()
  }

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8 opacity-90">Stay updated with the latest trends, new arrivals, and exclusive offers.</p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Your email address"
                        className="bg-primary-foreground text-foreground"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-left text-primary-foreground/90" />
                  </FormItem>
                )}
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
