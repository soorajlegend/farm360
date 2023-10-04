'use client'
import { User } from "@/types";
import { createContext, useContext, useState } from "react";



export type DataContextType = {
    user: User | null;
};

const DataContext = createContext<DataContextType>({
    user: null,
});

type DataProviderProps = {
    children: React.ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {

    const user =   {
        id: "1",
        clerkId: "1234567890",
        name: "John Doe",
        phone: "+15555555555",
        email: "john.doe@example.com",
        image: "https://example.com/john-doe.png",
        address: "123 Main Street, Anytown, CA 91234",
        userType: 1,
        dateRegistered: "2023-08-01T12:00:00.000Z",
      }

return (
    <DataContext.Provider value={{ user }}>
        {children}
    </DataContext.Provider>
);
};

export const useData = (): DataContextType => useContext(DataContext);