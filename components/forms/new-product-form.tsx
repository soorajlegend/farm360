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
import { requests, users, warehouses } from "@/data"
import { useData } from "../providers/content-provider"


const formSchema = z.object({
    product: z.string().min(1, {
        message: "Select a product"
    }),
    weight: z.coerce.number().min(1, {
        message: "Weight must be at least 1 KG"
    }),
    mobile: z.string().min(3, {
        message: "Input the onwer mobile number"
    }),
})


const NewProductForm = ({ defaultItem, request, isWarehouse }: { defaultItem?: string, request?: boolean, isWarehouse?: boolean }) => {

    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter();
    const { defaultProducts, user } = useData();


    const products = defaultProducts.map(prod => ({
        value: prod.id,
        name: prod.name
    }))

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const activeCustomer = users.find((user) => user?.id === defaultItem)

    const activeRequest = requests.find(req => req.id === defaultItem);

    const activeWarehouse = warehouses.find(warehouse => warehouse.id === defaultItem);


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            product: request ? activeRequest?.itemId || "" : "",
            weight: request ? activeRequest?.weight || 0 : 0,
            mobile: isWarehouse ? activeWarehouse?.phone || "" : request ? activeRequest?.userMobile || "" : activeCustomer?.phone || ""
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post("https://asibiti.ng/farm360/api/save-product.php", {
                userMobile: values?.mobile,
                orgMobile: user?.phone,
                productId: values.product,
                weight: values.weight
            })
            // .then(() => {
            //     form.reset();
            //     router.refresh();
            //     window.location.reload();
            // })
            // .finally(() => {
            //     router.push("/products")
            // })

        } catch (err) {
            console.log(err)
        }
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
                        Save Product
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
                                name="mobile"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=
                                            "uppercase text-sm font-bold text-slate-500 dark:text-slate-400 w-full flex">warehouse Mobile Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className="bg-gray-100 dark:bg-slate-900/50 border-0 focus-visible:ring-0 text-black dark:text-slate-200 focus-visible:ring-offset-0"
                                                placeholder="Mobile Number"
                                                type="tel"
                                                {...field}
                                            />
                                        </FormControl>
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
                                Save
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default NewProductForm