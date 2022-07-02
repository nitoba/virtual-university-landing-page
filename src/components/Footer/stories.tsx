import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer } from ".";
export default {
  title: "Layouts",
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const FooterComponent: ComponentStory<typeof Footer> = () => <Footer />;
