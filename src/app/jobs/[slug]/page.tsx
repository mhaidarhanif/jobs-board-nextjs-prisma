import { prisma } from "@/lib/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const job = await prisma.job.findUnique({ where: { slug } });

  if (!job) {
    return (
      <div>
        <p>Job not found</p>
      </div>
    );
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>{job.title}</h2>
          </CardTitle>
          <CardDescription>
            <p>{job.description}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Rp {job.salaryMin} - Rp {job.salaryMax}
          </p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              Apply
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
