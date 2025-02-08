import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import slugify from "slugify";

export default function NewJobPage() {
  async function addNewJob(formData: FormData) {
    "use server";
    const title = String(formData.get("title"));

    const newJob = await prisma.job.create({
      data: {
        title: title,
        slug: slugify(title),
        description: "Job description",
        company: "Company Name",
        location: "Indonesia",
        salaryMin: 10_000_000,
        salaryMax: 20_000_000,
      },
    });

    console.log({ message: "Add new job", newJob });

    redirect("/");
  }

  return (
    <div className="flex justify-center p-6">
      <div>
        <h1>Add New Job</h1>
        <form action={addNewJob} className="w-full max-w-xs space-y-2">
          <div>
            <Label htmlFor="title">Job Title:</Label>
            <Input name="title" placeholder="title" />
          </div>

          <div>
            <Label htmlFor="description">Job description:</Label>
            <Textarea name="description" placeholder="description" />
          </div>

          <Button type="submit">Add New Job</Button>
        </form>
      </div>
    </div>
  );
}
