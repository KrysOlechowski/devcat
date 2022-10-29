import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

interface Props {
  children: ReactNode;
}
export const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
