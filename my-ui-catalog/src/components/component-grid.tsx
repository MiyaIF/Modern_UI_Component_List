import { ComponentData } from "@/lib/components-data";
import { ComponentCard } from "./component-card";
import { EmptyState } from "./empty-state";

interface ComponentGridProps {
  components: ComponentData[];
  searchQuery?: string;
}

export function ComponentGrid({ components, searchQuery }: ComponentGridProps) {
  if (components.length === 0) {
    return (
      <EmptyState 
        title={searchQuery ? "No components found" : "No components"}
        description={
          searchQuery 
            ? `No components match "${searchQuery}". Try adjusting your search.`
            : "No components available in this category."
        }
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {components.map((component) => (
        <ComponentCard 
          key={component.id} 
          component={component}
          className="animate-fade-in"
        />
      ))}
    </div>
  );
}