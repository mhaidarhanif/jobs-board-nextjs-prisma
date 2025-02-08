import { Counter } from "@/components/shared/counter";
import { JobCard } from "@/components/shared/job-card";
import { prisma } from "@/lib/prisma";

export const revalidate = 5;

export default async function Home() {
  const jobs = await prisma.job.findMany();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Jobs Board</h1>
      <div>
        <Counter />
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
