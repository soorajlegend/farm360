"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import axios from "axios"

import {
    DialogFooter,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Input } from "../ui/input"
import { userProducts } from "@/data"


const formSchema = z.object({
    product: z.string().min(1, {
        message: "Select Product"
    }),
    weight: z.coerce.number().min(1, {
        message: "Weight must be at least 1 KG"
    }),
    warehouse: z.string().min(1, {
        message: "Select a warehouse"
    }),
})


const NewWarehouseRequestForm = ({ defaultItem }: { defaultItem?: string }) => {

    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter();


    const products = [
        {
            value: "1",
            name: "Apple"
        },
        {
            value: "2",
            name: "Rice"
        },
        {
            value: "3",
            name: "Corn"
        },
        {
            value: "4",
            name: "Wheat"
        },
        {
            value: "5",
            name: "Soybeans"
        },
        {
            value: "6",
            name: "Oats"
        },
    ]


    const warehouses = [
        {
            value: "1234567890",
            name: "John Doe's Warehouse"
        },
        {
            value: "9876543210",
            name: "Jane Doe's Warehouse"
        },
        {
            value: "1111111111",
            name: "Peter Jones's Warehouse"
        },
        {
            value: "2222222222",
            name: "Mary Johnson's Warehouse"
        },
        {
            value: "3333333333",
            name: "David Smith's Warehouse"
        },
    ]

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const selectedWarehouse = userProducts.find((item) => item?.id === defaultItem)


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            product: selectedWarehouse?.itemId || "",
            weight: 0,
            warehouse: selectedWarehouse?.warehouseId || ""
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
        router.push("/storage")
    }

    if (!isMounted) {
        return null
    }

    return (
        <div className="w-full max-w-lg bg-white md:shadow-xl md:rounded-xl">
            <div
                className="bg-white dark:bg-zinc-800 text-black dark:text-zinc-300 p-0 overflow-hidden">
                <div className="pt-8 px-6">
                    <h2 className="text-2xl text-center font-bold">
                        Saving request
                    </h2>
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <div className="space-y-8 px-6">
                            <FormField
                                control={form.control}
                                name="product"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=
                                            "uppercase text-sm font-bold text-zinc-500 dark:text-zinc-400 w-full flex">
                                            product
                                        </FormLabel>
                                        <Select
                                            disabled={isLoading}
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="bg-zinc-100 dark:bg-zinc-900/50 border-0 focus:ring-0 text-black dark:text-zinc-200 ring-offset-0 focus:ring-offset-0 capitalize outline-none flex">
                                                    <SelectValue placeholder="product" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    products.map((prod, i) => {

                                                        return (
                                                            <SelectItem
                                                                key={i}
                                                                value={prod.value.toString()}
                                                                className="capitalize"
                                                            >
                                                                {prod.name}
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
                            <FormField
                                control={form.control}
                                name="weight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=
                                            "uppercase text-sm font-bold text-slate-500 dark:text-slate-400 w-full flex">Weight (Kg)</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className="bg-gray-100 dark:bg-slate-900/50 border-0 focus-visible:ring-0 text-black dark:text-slate-200 focus-visible:ring-offset-0"
                                                placeholder="Weight"
                                                type="number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="dark:text-rose-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="warehouse"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=
                                            "uppercase text-sm font-bold text-zinc-500 dark:text-zinc-400 w-full flex">
                                            Warehouse
                                        </FormLabel>
                                        <Select
                                            disabled={isLoading}
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="bg-zinc-100 dark:bg-zinc-900/50 border-0 focus:ring-0 text-black dark:text-zinc-200 ring-offset-0 focus:ring-offset-0 capitalize outline-none flex">
                                                    <SelectValue placeholder="warehouse" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    warehouses.map((prod, i) => {

                                                        return (
                                                            <SelectItem
                                                                key={i}
                                                                value={prod.value.toString()}
                                                                className="capitalize"
                                                            >
                                                                {prod.name}
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
                                Send
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default NewWarehouseRequestForm