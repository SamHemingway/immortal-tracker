import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Tracker from "./components/Tracker";
import ProgressProvider from "./contexts/ProgressProvider";
import SelectionProvider from "./contexts/SelectionProvider";
import AnimationProvider from "./contexts/AnimationProvider";
import ToastProvider from "./contexts/ToastProvider";
import { TooltipProvider } from "@radix-ui/react-tooltip";

function App() {
  return (
    <ToastProvider>
      <TooltipProvider delayDuration={150}>
        <ProgressProvider>
          <SelectionProvider>
            <AnimationProvider>
              <GlobalStyle />
              <Header />
              <Tracker />
            </AnimationProvider>
          </SelectionProvider>
        </ProgressProvider>
      </TooltipProvider>
    </ToastProvider>
  );
}

export default App;
