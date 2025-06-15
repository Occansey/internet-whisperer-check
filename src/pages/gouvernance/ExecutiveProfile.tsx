
import { Card, CardContent } from "@/components/ui/card";

export interface ExecutiveMemberProps {
  photo: string;
  name: string;
  title: string;
  linkedin: string;
  bio: string;
}

export const getExecId = (name: string) => {
  return (
    "exec-" +
    name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
  );
};

const ExecutiveProfile = ({ executive }: { executive: ExecutiveMemberProps }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-1/3">
        <div
          className="rounded-lg overflow-hidden shadow-md"
          id={getExecId(executive.name)}
        >
          <img 
            src={executive.photo} 
            alt={executive.name} 
            className="w-full h-auto object-cover object-top"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-bold text-solio-blue">{executive.name}</h3>
          <p className="text-gray-700">{executive.title}</p>
          <a 
            href={executive.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-solio-blue hover:text-solio-yellow flex items-center transition-colors mt-2"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" className="mr-1">
              <path 
                fill="currentColor" 
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <Card>
          <CardContent className="prose max-w-none pt-6">
            <h2 className="text-xl font-semibold mb-4">Biographie</h2>
            <p className="whitespace-pre-line">{executive.bio}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExecutiveProfile;
