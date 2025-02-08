import { Job } from "@prisma/client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function JobCard({ job }: { job: Job }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>{job.title}</h2>
        </CardTitle>
        <CardDescription>
          <p>{job.description}</p>
          <p>{job.location}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Rp {job.salaryMin} - Rp {job.salaryMax}
        </p>
        <div className="flex gap-2">
          <Button asChild size="sm">
            <Link href={`/jobs/${job.slug}`}>View Details</Link>
          </Button>
          <Button size="sm" variant="outline">
            Apply Job
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
