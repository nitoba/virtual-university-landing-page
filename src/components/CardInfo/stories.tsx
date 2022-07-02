import { ComponentStory, ComponentMeta } from "@storybook/react";
import clockIcon from "../../assets/icons/clock.svg";
import peopleIcon from "../../assets/icons/people.svg";
import { CardInfo } from ".";

export default {
  title: "Cards",
  component: CardInfo,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["red", "blue"],
      },
    },
  },
} as ComponentMeta<typeof CardInfo>;

const Template: ComponentStory<typeof CardInfo> = (args) => (
  <CardInfo {...args} />
);

export const RedCardInfo = Template.bind({});
RedCardInfo.args = {
  title: "Red Card",
  description: "This is a red card",
  icon: <img src={clockIcon} />,
  variant: "red",
};

export const BlueCardInfo = Template.bind({});
BlueCardInfo.args = {
  title: "Blue Card",
  description: "This is a blue card",
  icon: <img src={peopleIcon} />,
  variant: "blue",
};
