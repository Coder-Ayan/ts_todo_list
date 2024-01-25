"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import Todos from "./Todos";

const FilterTabs = () => {
  type Tab = { id: string; label: string; filter?: string };
  const tabs: Tab[] = [
    { id: "all", label: "All" },
    { id: "active", label: "Active", filter: "active" },
    { id: "completed", label: "Completed", filter: "completed" },
  ];
  return (
    <Tabs
      variant="underlined"
      color="success"
      size="lg"
      items={tabs}
      className="[&>*]:gap-20"
    >
      {(item) => (
        <Tab key={item.id} title={item.label}>
          <Todos filter={item.filter} />
        </Tab>
      )}
    </Tabs>
  );
};

export default FilterTabs;
