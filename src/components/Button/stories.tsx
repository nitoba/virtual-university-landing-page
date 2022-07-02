import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

export default {
  title: "Buttons",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["red", "blue"],
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
  title: "Red Button",
  variant: "red",
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  title: "Blue Button",
  variant: "blue",
};
