import { JobCard } from "@/components/shared/job-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { prisma } from "@/lib/prisma";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const q = (await searchParams).q;

  const jobs = await prisma.job.findMany({
    where: {
      OR: [
        { title: { contains: q, mode: "insensitive" } },
        { description: { contains: q, mode: "insensitive" } },
        { company: { contains: q, mode: "insensitive" } },
        { location: { contains: q, mode: "insensitive" } },
      ],
    },
  });

  return (
    <div>
      <div className="flex justify-center p-6">
        <div>
          <p>Search Page</p>
          <form
            method="get"
            action="/search"
            className="w-full max-w-xs space-y-2"
          >
            <div>
              <Label htmlFor="q">Search:</Label>
              <Input
                type="search"
                name="q"
                placeholder="Input query..."
                defaultValue={q}
              />
            </div>
            <Button type="submit">Search Jobs</Button>
          </form>
        </div>
      </div>

      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job.id}>
            <JobCard job={job} />
          </li>
        ))}
      </ul>
    </div>
  );
}
