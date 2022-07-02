import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from ".";
export default {
  title: "Layouts",
  component: Header,
} as ComponentMeta<typeof Header>;

export const HeaderComponent: ComponentStory<typeof Header> = () => <Header />;
