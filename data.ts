import { User, UserProduct, WarehouseProduct, Request } from "./types";

export const warehouseProducts: WarehouseProduct[] = [
  {
    id: "1",
    name: "Wheat",
    ownerId: "5",
    ownerName: "John Doe",
    ownerMobile: "+15555555555",
    ownerImage: "https://example.com/john-doe.png",
    ownerAddress: "123 Main Street, Anytown, CA 91234",
    weight: 100,
    status: 1,
    dateAdded: "2023-08-04T12:00:00.000Z",
    dateCollected: null,
  },
  {
    id: "2",
    name: "Rice",
    ownerId: "4",
    ownerName: "Jane Doe",
    ownerMobile: "+15555555556",
    ownerImage: "https://example.com/jane-doe.png",
    ownerAddress: "456 Elm Street, Anytown, CA 91234",
    weight: 50,
    status: 2,
    dateAdded: "2023-08-05T12:00:00.000Z",
    dateCollected: null,
  },
  {
    id: "3",
    name: "Corn",
    ownerId: "3",
    ownerName: "Peter Jones",
    ownerMobile: "+15555555557",
    ownerImage: "https://example.com/peter-jones.png",
    ownerAddress: "789 Oak Street, Anytown, CA 91234",
    weight: 75,
    status: 3,
    dateAdded: "2023-08-06T12:00:00.000Z",
    dateCollected: null,
  },
  {
    id: "4",
    name: "Soybeans",
    ownerId: "2",
    ownerName: "Mary Johnson",
    ownerMobile: "+15555555558",
    ownerImage: "https://example.com/mary-johnson.png",
    ownerAddress: "1011 Maple Street, Anytown, CA 91234",
    weight: 25,
    status: 4,
    dateAdded: "2023-08-07T12:00:00.000Z",
    dateCollected: null,
  },
  {
    id: "5",
    name: "Oats",
    ownerId: "1",
    ownerName: "David Smith",
    ownerMobile: "+15555555559",
    ownerImage: "https://example.com/david-smith.png",
    ownerAddress: "1213 Cedar Street, Anytown, CA 91234",
    weight: 150,
    status: 5,
    dateAdded: "2023-08-08T12:00:00.000Z",
    dateCollected: null,
  },
];

export const userProducts: UserProduct[] = [
  {
    id: "1",
    itemId: "4",
    name: "Wheat",
    warehouseId: "1234567890",
    warehouseName: "John Doe's Warehouse",
    warehouseMobile: "+15555555555",
    warehouseImage: "https://example.com/john-doe.png",
    warehouseAddress: "123 Main Street, Anytown, CA 91234",
    weight: 100,
    status: 1,
    dateAdded: "2023-08-04T12:00:00.000Z",
  },
  {
    id: "2",
    itemId: "2",
    name: "Rice",
    warehouseId: "9876543210",
    warehouseName: "Jane Doe's Warehouse",
    warehouseMobile: "+15555555556",
    warehouseImage: "https://example.com/jane-doe.png",
    warehouseAddress: "456 Elm Street, Anytown, CA 91234",
    weight: 50,
    status: 2,
    dateAdded: "2023-08-05T12:00:00.000Z",
  },
  {
    id: "3",
    itemId: "3",
    name: "Corn",
    warehouseId: "1111111111",
    warehouseName: "Peter Jones's Warehouse",
    warehouseMobile: "+15555555557",
    warehouseImage: "https://example.com/peter-jones.png",
    warehouseAddress: "789 Oak Street, Anytown, CA 91234",
    weight: 75,
    status: 3,
    dateAdded: "2023-08-06T12:00:00.000Z",
  },
  {
    id: "4",
    itemId: "5",
    name: "Soybeans",
    warehouseId: "2222222222",
    warehouseName: "Mary Johnson's Warehouse",
    warehouseMobile: "+15555555558",
    warehouseImage: "https://example.com/mary-johnson.png",
    warehouseAddress: "1011 Maple Street, Anytown, CA 91234",
    weight: 25,
    status: 4,
    dateAdded: "2023-08-07T12:00:00.000Z",
  },
  {
    id: "5",
    itemId: "6",
    name: "Oats",
    warehouseId: "3333333333",
    warehouseName: "David Smith's Warehouse",
    warehouseMobile: "+15555555559",
    warehouseImage: "https://example.com/david-smith.png",
    warehouseAddress: "1213 Cedar Street, Anytown, CA 91234",
    weight: 150,
    status: 5,
    dateAdded: "2023-08-08T12:00:00.000Z",
  },
];

export const users: User[] = [
  {
    id: "1",
    clerkId: "1234567890",
    name: "John Doe",
    phone: "+15555555555",
    email: "john.doe@example.com",
    image: "https://example.com/john-doe.png",
    address: "123 Main Street, Anytown, CA 91234",
    dateRegistered: "2023-08-01T12:00:00.000Z",
  },
  {
    id: "2",
    clerkId: "9876543210",
    name: "Jane Doe",
    phone: "+15555555556",
    email: "jane.doe@example.com",
    image: "https://example.com/jane-doe.png",
    address: "456 Elm Street, Anytown, CA 91234",
    dateRegistered: "2023-08-02T12:00:00.000Z",
  },
  {
    id: "3",
    clerkId: "1111111111",
    name: "Peter Jones",
    phone: "+15555555557",
    email: "peter.jones@example.com",
    image: "https://example.com/peter-jones.png",
    address: "789 Oak Street, Anytown, CA 91234",
    dateRegistered: "2023-08-03T12:00:00.000Z",
  },
  {
    id: "4",
    clerkId: "2222222222",
    name: "Mary Johnson",
    phone: "+15555555558",
    email: "mary.johnson@example.com",
    image: "https://example.com/mary-johnson.png",
    address: "1011 Maple Street, Anytown, CA 91234",
    dateRegistered: "2023-08-04T12:00:00.000Z",
  },
  {
    id: "5",
    clerkId: "3333333333",
    name: "David Smith",
    phone: "+15555555559",
    email: "david.smith@example.com",
    image: "https://example.com/david-smith.png",
    address: "1213 Cedar Street, Anytown, CA 91234",
    dateRegistered: "2023-08-05T12:00:00.000Z",
  },
];

export const requests: Request[] = [
  {
    id: "1",
    userName: "John Doe",
    userMobile: "+15555555555",
    userImage: "https://example.com/john-doe.png",
    userAddress: "123 Main Street, Anytown, CA 91234",
    orgId: "1234567890",
    orgName: "ABC",
    orgMobile: "+15555555555",
    orgImage: "https://example.com/wheat.png",
    orgAddress: "123 Main Street, Anytown, CA 91234",
    itemId: "4",
    itemName: "Wheat",
    weight: 100,
    duration: null,
    type: 1, // product
    status: "unread",
    isIncoming: true, // borrow
    dateAdded: "2023-08-04T12:00:00.000Z",
  },
  {
    id: "2",
    userName: "Jane Doe",
    userMobile: "+15555555556",
    userImage: "https://example.com/jane-doe.png",
    userAddress: "456 Elm Street, Anytown, CA 91234",
    orgId: "9876543210",
    orgName: "ABC",
    orgMobile: "+15555555556",
    orgImage: "https://example.com/rice.png",
    orgAddress: "456 Elm Street, Anytown, CA 91234",
    itemId: "2",
    itemName: "Rice",
    weight: 50,
    duration: null,
    type: 1, // product
    status: "read",
    isIncoming: true, // borrow
    dateAdded: "2023-08-05T12:00:00.000Z",
  },
  {
    id: "3",
    userName: "Peter Jones",
    userMobile: "+15555555557",
    userImage: "https://example.com/peter-jones.png",
    userAddress: "789 Oak Street, Anytown, CA 91234",
    orgId: "1111111111",
    orgName: "ABC",
    orgMobile: "+15555555557",
    orgImage: "https://example.com/corn.png",
    orgAddress: "789 Oak Street, Anytown, CA 91234",
    itemId: "3",
    itemName: "Corn",
    weight: 75,
    duration: null,
    type: 1, // product
    status: "unread",
    isIncoming: false, // withdrawal
    dateAdded: "2023-08-06T12:00:00.000Z",
  },
  {
    id: "4",
    userName: "Mary Johnson",
    userMobile: "+15555555558",
    userImage: "https://example.com/mary-johnson.png",
    userAddress: "1011 Maple Street, Anytown, CA 91234",
    orgId: "2222222222",
    orgName: "ABC",
    orgMobile: "+15555555558",
    orgImage: "https://example.com/soybeans.png",
    orgAddress: "1011 Maple Street, Anytown, CA 91234",
    itemId: "5",
    itemName: "Soybeans",
    weight: 25,
    duration: null,
    type: 1, // product
    status: "read",
    isIncoming: false, // withdrawal
    dateAdded: "2023-08-07T12:00:00.000Z",
  },
  {
    id: "6",
    userName: "Alice Smith",
    userMobile: "+15555555560",
    userImage: "https://example.com/alice-smith.png",
    userAddress: "1415 Chestnut Street, Anytown, CA 91234",
    orgId: "3333333333",
    orgName: "ABC",
    orgMobile: "+15555555559",
    orgImage: "https://example.com/oats.png",
    orgAddress: "1213 Cedar Street, Anytown, CA 91234",
    itemId: "6",
    itemName: "Oats",
    weight: 150,
    duration: null,
    type: 1, // product
    status: "unread",
    isIncoming: true, // borrow
    dateAdded: "2023-08-08T12:00:00.000Z",
  },
  {
    id: "7",
    userName: "Bob Smith",
    userMobile: "+15555555561",
    userImage: "https://example.com/bob-smith.png",
    userAddress: "1617 Elm Street, Anytown, CA 91234",
    orgId: "4444444444",
    orgName: "EFG",
    orgMobile: "+15555555559",
    orgImage: "https://example.com/hammer.png",
    orgAddress: "1213 Cedar Street, Anytown, CA 91234",
    itemId: "1",
    itemName: "Hammer",
    weight: null,
    duration: "1 day",
    type: 2, // tool
    status: "read",
    isIncoming: true, // borrow
    dateAdded: "2023-08-09T12:00:00.000Z",
  },
  {
    id: "8",
    userName: "Carol Smith",
    userMobile: "+15555555562",
    userImage: "https://example.com/carol-smith.png",
    userAddress: "1819 Maple Street, Anytown, CA 91234",
    orgId: "5555555555",
    orgName: "EFG",
    orgMobile: "+15555555559",
    orgImage: "https://example.com/tractor.png",
    orgAddress: "1213 Cedar Street, Anytown, CA 91234",
    itemId: "2",
    itemName: "Tractor",
    weight: null,
    duration: "1 week",
    type: 2, // tool
    status: "unread",
    isIncoming: false, // withdrawal
    dateAdded: "2023-08-10T12:00:00.000Z",
  },
  {
    id: "9",
    userName: "Dave Smith",
    userMobile: "+15555555563",
    userImage: "https://example.com/dave-smith.png",
    userAddress: "2021 Oak Street, Anytown, CA 91234",
    orgId: "6666666666",
    orgName: "EFG",
    orgMobile: "+15555555559",
    orgImage: "https://example.com/water-pump.png",
    orgAddress: "1213 Cedar Street, Anytown, CA 91234",
    itemId: "3",
    itemName: "Water Pump",
    weight: null,
    duration: "2 days",
    type: 2, // tool
    status: "read",
    isIncoming: false, // withdrawal
    dateAdded: "2023-08-11T12:00:00.000Z",
  },
];
