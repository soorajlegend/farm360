"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import axios from "axios"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"


const formSchema = z.object({
    type: z.string().min(1, {
        message: "Select your account type"
    }),
})


const InitialModal = () => {

    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter();
    

        const accountTypes = [
            {
                value: 1,
                name: "Warehouse"
            },
            {
                value: 2,
                name: "Tools Lender"
            },
            {
                value: 3,
                name: "user/farmer"
            }
        ]

    useEffect(() => {
        setIsMounted(true)
    }, [])


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            type: "",
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // try {
        //     await axios.post("/api/servers", values)

        //     form.reset();
        //     router.refresh();
        //     window.location.reload();
        // } catch (err) {
        //     console.log(err)
        // }
        
    }

    if (!isMounted) {
        return null
    }

    return (
        <Dialog open>
            <DialogContent
                className="bg-white dark:bg-zinc-800 text-black dark:text-zinc-300 p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Select account type
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <div className="space-y-8 px-6">
                        <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=
                                            "uppercase text-sm font-bold text-zinc-500 dark:text-zinc-400 w-full flex">
                                            Type
                                        </FormLabel>
                                        <Select
                                            disabled={isLoading}
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="bg-zinc-100 dark:bg-zinc-900/50 border-0 focus:ring-0 text-black dark:text-zinc-200 ring-offset-0 focus:ring-offset-0 capitalize outline-none flex">
                                                    <SelectValue placeholder="Type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    accountTypes.map((type, i) => {

                                                        return (
                                                            <SelectItem
                                                                key={i}
                                                                value={type.value.toString()}
                                                                className="capitalize"
                                                            >
                                                                {type.name}
                                                            </SelectItem>
                                                        )
                                                    })
                                                }
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="dark:text-rose-500" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter className="bg-zinc-100 dark:bg-zinc-900/50 px-6 py-4">
                            <Button
                                disabled={isLoading}
                                variant="primary"
                            >
                               Proceed
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default InitialModal