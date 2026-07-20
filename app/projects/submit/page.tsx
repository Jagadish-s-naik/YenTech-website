import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";

export default function SubmitProjectPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Submit a Project"
        description="Share your hard work with the YenTech community. Fill out the details below to showcase your project."
      />
      <div className="container mx-auto max-w-3xl px-4 py-16 sm:px-8">
        <div className="bg-background rounded-2xl border p-8 shadow-sm">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Project Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="e.g. EcoTrack Mobile App"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Short Description
              </label>
              <textarea
                id="description"
                rows={4}
                placeholder="Briefly describe what your project does..."
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="author" className="text-sm font-medium">
                  Author / Team Name
                </label>
                <input
                  id="author"
                  type="text"
                  placeholder="Your Name or Team Name"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="tags" className="text-sm font-medium">
                  Tech Stack (comma separated)
                </label>
                <input
                  id="tags"
                  type="text"
                  placeholder="e.g. React, Node.js, MongoDB"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="repo" className="text-sm font-medium">
                  Repository URL (Optional)
                </label>
                <input
                  id="repo"
                  type="url"
                  placeholder="https://github.com/..."
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="demo" className="text-sm font-medium">
                  Live Demo URL (Optional)
                </label>
                <input
                  id="demo"
                  type="url"
                  placeholder="https://myproject.app..."
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Cover Image</label>
              <div className="hover:bg-muted/50 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 text-center transition-colors">
                <div className="bg-primary/10 text-primary mb-3 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" x2="12" y1="3" y2="15" />
                  </svg>
                </div>
                <p className="text-sm font-medium">
                  Click to upload or drag and drop
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-4 border-t pt-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="button">Submit Project</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
