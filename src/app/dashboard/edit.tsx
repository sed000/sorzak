"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { updateData } from "@/api/actions";
import { useRouter } from "next/navigation";

export default function EditDialog({
  params,
}: {
  params: { id: string; key: string };
}) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [key, setKey] = useState("");
  const [value, setValue] = useState(false);

  async function saveChanges(key: string, value: boolean) {
    setLoading(true);
    try {
      if (key == "") {
        key = params.key;
        await updateData(key, value, params.id);
        setLoading(false);
      } else {
        await updateData(key, value, params.id);
        setLoading(false);
      }
    } catch (error) {
      console.log("Something went wrong");
      setLoading(false);
    }
    router.refresh();
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Edit className="w-4 h-4 mr-1" />
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
            <DialogDescription>
              Make changes to your boolean service here. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="key" className="text-right">
                Key
              </Label>
              <Input
                id="key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="value" className="text-right">
                Value
              </Label>
              <Select
                onValueChange={(selectedValue) =>
                  setValue(selectedValue === "true")
                }
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
          </div>
          <DialogFooter>
            <Button
              disabled={isLoading}
              type="submit"
              onClick={() => saveChanges(key, value)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
