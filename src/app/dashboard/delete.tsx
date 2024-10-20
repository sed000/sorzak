"use client";

import { deleteData } from "@/api/actions";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function DeleteButton({ params }: { params: { id: string } }) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  async function deleteItem(id: string) {
    setLoading(true)
    try {
      await deleteData(id);
      setLoading(false)
    } catch (error) {
      console.error("Error deleting item:", error);
      setLoading(false)
    }
    router.refresh();
  }

  return (
    <div>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => deleteItem(params.id)}
        disabled={isLoading}
      >
        <Trash2 className="w-4 h-4 mr-1" />
        Delete
      </Button>
    </div>
  );
}
