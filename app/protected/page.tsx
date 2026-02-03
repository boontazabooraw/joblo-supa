import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

async function UserDetails() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return JSON.stringify(data.claims, null, 2);
}

async function JobApplications() {
  const supabase = await createClient();
  const { data: jobapplications } = await supabase
    .from("jobapplications")
    .select("*");

  return <pre>{JSON.stringify(jobapplications, null, 2)}</pre>;
}

export default function ProtectedPage() {
  return (
    <div className="flex flex-col gap-12 border-2 border-black">
      {/* <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your user details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          <Suspense>
            <UserDetails />
          </Suspense>
        </pre>
      </div> */}
      <div className="overflow-auto">
        <Suspense>
          <JobApplications />
        </Suspense>
      </div>
    </div>
  );
}
