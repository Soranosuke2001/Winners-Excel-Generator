"use client";

import { sendData } from "@/app/api/send/sendData";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formFields } from "@/lib/constants/formFields";
import { newFormSchema } from "@/lib/newFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function page() {
  async function onSubmit(data: z.infer<typeof newFormSchema>) {
    // Send the data to the backend
    const response = await sendData(data);

    if (!response.ok) {
      throw new Error("There was an error sending the data to the backend")
    }

    console.log(response)
  }

  const form = useForm<z.infer<typeof newFormSchema>>({
    resolver: zodResolver(newFormSchema),
    defaultValues: {
      cartons: 100,
      ratio: 1.5,
      skids: 10,
      regular: 10,
      bigBox: 10,
      loose: 10,
      eightFeet: 10,
      associates: 5,
      totalMin: 150,
      startTime: "07:30",
      endTime: "12:00",
      breakTime: "00:10",
    },
  });

  return (
    <div className="w-screen flex justify-center bg-black">
      <div className="border-solid border-gray-600 border-2 rounded-md w-1/2 m-4 p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {formFields.map((eachField) => {
              return (
                <FormField
                  key={eachField.name}
                  control={form.control}
                  name={eachField.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-xl">
                        {eachField.label}
                      </FormLabel>
                      <FormControl>
                        <Input className="bg-slate-300" {...field} />
                      </FormControl>
                      <FormDescription className="text-gray-200">
                        {eachField.description}
                      </FormDescription>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />
              );
            })}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
