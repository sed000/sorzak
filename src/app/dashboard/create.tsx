"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { createData } from "@/api/actions";
import { useRouter } from "next/navigation";

export default function CreateForm() {
  const [key, setKey] = useState("");
  const [value, setValue] = useState<boolean | null>(null);
  const [selectVal, setSelectVal] = useState("");
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (key && value !== null) {
      try {
        await createData({ userId: "", key, value });
        setKey("");
        setValue(!value);
        router.refresh()
      } catch (error) {
        console.error("Failed to create API:", error);
      }
    }
  };

  return (
    <div>
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Create New Boolean Service
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="api-name">Key</Label>
            <Input
              id="api-name"
              placeholder="Name of the key"
              required
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="api-value">Value</Label>
            <Select
              value={value === null ? undefined : value.toString()}
              onValueChange={(val) => setValue(val === "true")}
            >
              <SelectTrigger id="api-value">
                <SelectValue placeholder="Select a value" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">True / 1</SelectItem>
                <SelectItem value="false">False / 0</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create API
          </Button>
        </form>
      </section>
    </div>
  );
}
