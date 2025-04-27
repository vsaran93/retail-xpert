"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
})

export default function Login() {
  // ...

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="grid place-items-center w-full max-w-md p-6 bg-white rounded shadow border border-gray-300">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold mb-1">Welcome back</h1>
            <p className="text-sm text-gray-500">Glad to see you again 👋</p>
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Username" {...field} className="w-full rounded-md" />
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
              <FormControl>
                <Input type="password" placeholder="Password" {...field} className="w-full rounded-md" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-right text-sm">
            <a href="/forgot-password" className="text-blue-600 hover:underline">
                Forgot password?
            </a>
        </div>
        <div className="flex justify-center">
            <Button type="submit" className="w-full md:w-1/2 rounded-md bg-blue-600 hover:bg-blue-700 transition">Login</Button>
        </div>
      </form>
    </Form>
    </div>
    </div>
    
  )
}
