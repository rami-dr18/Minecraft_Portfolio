import WindowControls from "#components/WindowControls";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";

import { Pickaxe, FlameKindling } from "lucide-react"; // <-- new icons

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2 className="ms-2">Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@Rami % </span>
          Show tech stack
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li className="flex items-center" key={category}>
              <Pickaxe className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Pickaxe size={20} /> 5 of 5 stacks loaded successfully.(100%)
          </p>
          <p className="text-black">
            <FlameKindling size={15} fill="#ff5555" /> Render Time 6ms
          </p>
        </div>
      </div>
    </>
  );
};
const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
