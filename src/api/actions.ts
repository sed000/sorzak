"use server";

import { auth } from "@clerk/nextjs/server";

const apiLink = process.env.API_LINK;

interface DataItem {
  id?: string;
  userId: string;
  key: string;
  value: boolean;
}

export async function fetchData(): Promise<DataItem[]> {
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const response = await fetch(`${apiLink}/${userId}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  
  return await response.json();
}

export async function createData(newItem: DataItem) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const response = await fetch(`${apiLink}/${userId}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });
  if (!response.ok) {
    throw new Error("Failed to create data");
  }
  return await response.json();
  
}

export async function updateData(key: string, value: boolean, id: string) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const updatedItem = {
    key,
    value,
  };
  const response = await fetch(`${apiLink}/${userId}/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedItem),
  });
  if (!response.ok) {
    throw new Error("Failed to update data");
  }
  return await response.json();
}

export async function deleteData(id: string) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const response = await fetch(`${apiLink}/${userId}/delete/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete data");
  }
  return await response.json();
}
