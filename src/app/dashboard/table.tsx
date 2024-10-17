"use server";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Link } from "lucide-react";
import React from "react";
import EditDialog from "./edit";
import DeleteButton from "./delete";
import { fetchData } from "@/api/actions";

export default async function DataTable() {
  const apiLink = process.env.NEXT_PUBLIC_API_LINK;
  const data = await fetchData();
  return (
    <div>
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Your APIs</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Key</TableHead>
              <TableHead>Link</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>{item.key}</TableCell>
                <TableCell>
                  <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                    <a
                      href={`${apiLink}/data/${item.id}`}
                      target="_blank"
                    >
                      Link
                      <Link />
                    </a>
                  </Button>
                </TableCell>
                <TableCell>{item.value.toString()}</TableCell>

                <TableCell>
                  <div className="flex space-x-2">
                    <EditDialog
                      params={{
                        id: item.id,
                        key: item.key,
                      }}
                    ></EditDialog>

                    <DeleteButton
                      params={{
                        id: item.id,
                      }}
                    ></DeleteButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
