'use client'
import { fetcher } from "@/actions/fetch-util";
import { User, WarehouseProduct } from "@/types";
import { useAuth } from "@clerk/nextjs";
import { createContext, useContext, useEffect, useState } from "react";



export type DataContextType = {
  isLoading: boolean
  user: User | null;
  setUser: (user: User) => void;
  warehouseProducts: WarehouseProduct[]
};

const DataContext = createContext<DataContextType>({
  isLoading: false,
  user: null,
  setUser: () => { },
  warehouseProducts: []
});

type DataProviderProps = {
  children: React.ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [warehouseProducts, setWarehouseProducts] = useState<WarehouseProduct[]>([]);

  const { userId } = useAuth();

  useEffect(() => {

    if (!userId) {
      return
    }

    const getUserData = async () => {
      setIsloading(true)
      try {
        const userData = await fetcher({ id: userId }, "get-user-info.php");
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
      setIsloading(false)
    };

    getUserData();
  }, [userId]);

  useEffect(() => {
    const getWarehouseProducts = async () => {
      setIsloading(true)
      try {
        const products = await fetcher({ userId }, "get-products.php");
        setWarehouseProducts(products);
      } catch (error) {
        console.error('Error fetching warehouses products:', error);
      }
      setIsloading(false)
    };

    if (user?.utype === "2") {
      getWarehouseProducts();
    }
  }, [user])



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
    <DataContext.Provider value={{ user, setUser, isLoading, warehouseProducts }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => useContext(DataContext);