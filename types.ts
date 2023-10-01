export interface WarehouseProduct {
  id: string;
  name: string;
  ownerId: string;
  ownerName: string;
  ownerMobile: string;
  ownerImage: string;
  ownerAddress: string;
  weight: number;
  status: number;
  dateAdded: string;
  dateCollected: string | null;
}

export interface UserProduct {
  id: string;
  name: string;
  warehouseId: string;
  warehouseName: string;
  warehouseMobile: string;
  warehouseImage: string;
  warehouseAddress: string;
  weight: number;
  status: number;
  dateAdded: string;
  dateCollected: string | null;
}

// users/farmers only
export interface User {
  id: string;
  clerkId: string;
  name: string;
  phone: string;
  email: string;
  image: string;
  address: string;
  dateRegistered: string;
}

export interface Request {
  id: string;
  userName: string;
  userMobile: string;
  userImage: string;
  userAddress: string;
  entityId: string;
  entityName: string;
  entityMobile: string;
  entityImage: string;
  entityAddress: string;
  weight: string | null //(for product only in kg units)
  duration: string | null //(for tool only)
  type: number; // define the request is for a product or tool
  status: "read" | "unread"; // define the status of the request read || unread
  isIncoming: boolean; // saving, borrow = true, withdrawal = false
  dateAdded: string;
}