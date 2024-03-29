import { newFormSchema } from "@/lib/newFormSchema";
import { z } from "zod";

export async function sendData(body: z.infer<typeof newFormSchema>) {
    console.log(body);
    
    const res = await fetch("http://127.0.0.1:5328/submit/data", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if (!res.ok) {
        throw new Error("There was an error submitting your data");
    }

    const data = await res.json()

    return data
}