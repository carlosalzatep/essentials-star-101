import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreConcept/CoreConcept";
import { TabButton } from "./components/TabButton";
import type { CoreConceptProps } from "./types/componentProps";

function App() {
  const [selectedTopic, setSelectedTopic] = useState<string>();

  const handleSelect = (selectedButton: string) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div className="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(
              (coreConcept: CoreConceptProps, index: number) => (
                <CoreConcept key={index} {...coreConcept} />
              )
            )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <menu>
              <TabButton
                isSelected={selectedTopic === "components"}
                onSelect={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onSelect={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onSelect={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onSelect={() => handleSelect("state")}
              >
                State
              </TabButton>
            </menu>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
