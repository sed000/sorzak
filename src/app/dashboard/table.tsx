"use server";
import { fetchData } from "@/api/actions";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Link, View } from "lucide-react";
import React from "react";
import EditDialog from "./edit";
import DeleteButton from "./delete";

export default async function DataTable() {
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
                  <Button asChild>
                    <a
                      href={`http://localhost:8080/data/${item.id}`}
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
