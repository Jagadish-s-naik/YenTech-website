import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { Button } from "@/components/ui/button";
import { Search, CheckCircle2, ShieldCheck } from "lucide-react";

export default function VerifyPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        badge="Credentials"
        title="Certificate Verification"
        description="Verify the authenticity of official YenTech certificates and member credentials."
      />

      <PageContainer className="flex justify-center">
        <div className="w-full max-w-2xl space-y-8">
          <div className="border-border/60 bg-card rounded-2xl border p-6 shadow-xs sm:p-10">
            <h2 className="text-foreground mb-2 text-center text-xl font-bold tracking-tight">
              Enter Certificate ID
            </h2>
            <p className="text-muted-foreground mb-6 text-center text-xs sm:text-sm">
              You can find the unique verification code at the bottom right of
              your certificate.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="text-muted-foreground absolute top-3.5 left-3.5 h-4 w-4" />
                <input
                  type="text"
                  placeholder="e.g. YT-2026-AB1234"
                  className="border-input bg-muted/20 text-foreground h-11 w-full rounded-xl border px-3 py-2 pl-10 text-sm focus-visible:ring-2 focus-visible:ring-[#0CBAA6] focus-visible:outline-none"
                  defaultValue="YT-2026-AB1234"
                />
              </div>
              <Button
                size="lg"
                className="h-11 shrink-0 rounded-xl bg-[#0CBAA6] px-8 text-sm font-semibold text-white shadow-md shadow-[#0CBAA6]/20 hover:bg-[#0a9e8d]"
              >
                Verify Certificate
              </Button>
            </div>
          </div>

          {/* Verification Result Card */}
          <div className="animate-in fade-in slide-in-from-bottom-3 flex items-start gap-4 rounded-2xl border border-[#0CBAA6]/30 bg-[#0CBAA6]/10 p-6 duration-300">
            <div className="shrink-0 rounded-full bg-[#0CBAA6] p-2 text-white shadow-sm shadow-[#0CBAA6]/30">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#0CBAA6] dark:text-[#0CBAA6]">
                  Valid Certificate
                  <ShieldCheck className="h-4 w-4" />
                </h3>
                <p className="text-muted-foreground text-xs">
                  This certificate was successfully verified in our official
                  registry.
                </p>
              </div>

              <div className="border-border/60 bg-background/80 dark:bg-card/90 space-y-3 rounded-xl border p-4 text-xs shadow-xs backdrop-blur-xs sm:text-sm">
                <div className="border-border/50 grid grid-cols-3 gap-2 border-b pb-2.5">
                  <span className="text-muted-foreground font-medium">
                    Issued To
                  </span>
                  <span className="text-foreground col-span-2 font-bold">
                    Jane Doe
                  </span>
                </div>
                <div className="border-border/50 grid grid-cols-3 gap-2 border-b pb-2.5">
                  <span className="text-muted-foreground font-medium">
                    Course/Event
                  </span>
                  <span className="text-foreground col-span-2 font-bold">
                    Advanced React Bootcamp
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground font-medium">
                    Issue Date
                  </span>
                  <span className="text-foreground col-span-2 font-bold">
                    June 15, 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
