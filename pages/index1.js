import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/categories";

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Tsixla</h1>
      <Input
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <Button className="mb-6">Search</Button>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Card key={category.name}>
            <CardContent className="p-4 text-center">
              <p className="text-lg font-semibold">{category.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
