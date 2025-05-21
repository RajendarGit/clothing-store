"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Container from "./ui/container";
import { formMessages } from "@/lib/messages";

const newsletterSchema = z.object({
  email: z.string().email({ message: formMessages.invalidEmail }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

interface NewsletterProps {
  title: string;
  description: string;
  className?: string;
  primaryBG?: boolean;
}

const Newsletter: React.FC<NewsletterProps> = ({
  title,
  description,
  className,
  primaryBG = true,
}) => {
  const { toast } = useToast();

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: NewsletterFormValues) => {
    toast({
      title: "Success!",
      description: formMessages.subscribeSuccess,
    });

    form.reset();
  };

  return (
    <section
      className={`py-6 ${
        primaryBG ? "bg-primary text-primary-foreground" : "bg-muted/50"
      } ${className}`}
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="mb-8 opacity-90">{description}</p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
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
              <Button
                type="submit"
                className={
                  primaryBG
                    ? "bg-muted/50 text-white hover:bg-muted/30"
                    : "bg-primary text-primary-foreground"
                }
              >
                Subscribe
              </Button>
            </form>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
