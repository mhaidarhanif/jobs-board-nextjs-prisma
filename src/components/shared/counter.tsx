"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Counter() {
  const [count, setCount] = useState(0);

  return <Button onClick={() => setCount(count + 1)}>{count}</Button>;
}
