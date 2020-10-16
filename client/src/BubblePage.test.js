import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import BubblePage from "./components/BubblePage";
import {MockData} from "./util/mockData";
import ColorList from "./components/ColorList";

test("Fetches data and renders the bubbles",() => {
  // Finish this test
  render(<BubblePage/>);
  render(<ColorList colors={MockData} />)
  screen.debug()
});
