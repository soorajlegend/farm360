'use client'
import { fetchUserByClerkId } from "@/actions/fetch-user-info";
import { User } from "@/types";
import { useAuth } from "@clerk/nextjs";
import { createContext, useContext, useEffect, useState } from "react";



export type DataContextType = {
  isLoading: boolean
  user: User | null;
  setUser: (user: User) => void;
};

const DataContext = createContext<DataContextType>({
  isLoading: false,
  user: null,
  setUser: () => { }
});

type DataProviderProps = {
  children: React.ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const { userId } = useAuth();

  useEffect(() => {

    if (!userId) {
      return
    }

    const getUserData = async () => {
      try {
        setIsloading(true)
        const userData = await fetchUserByClerkId(userId);
        setUser(userData);
        setIsloading(false)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    getUserData();
  }, [userId]);



  // const user =   {
  //     id: "1",
  //     clerkId: "1234567890",
  //     name: "John Doe",
  //     phone: "+15555555555",
  //     email: "john.doe@example.com",
  //     image: "https://example.com/john-doe.png",
  //     address: "123 Main Street, Anytown, CA 91234",
  //     userType: 1,
  //     dateRegistered: "2023-08-01T12:00:00.000Z",
  //   }

  return (
    <DataContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => useContext(DataContext);