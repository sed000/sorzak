"use client";

import { deleteData } from "@/api/actions";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function DeleteButton({ params }: { params: { id: string } }) {
  const router = useRouter();
  async function deleteItem(id: string) {
    try {
      const result = await deleteData(id);
      console.log("Delete successful:", result);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    router.refresh();
  }

  return (
    <div>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => deleteItem(params.id)}
      >
        <Trash2 className="w-4 h-4 mr-1" />
        Delete
      </Button>
    </div>
  );
}
