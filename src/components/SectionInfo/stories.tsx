import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SectionInfo } from ".";
import image from "../../assets/images/compute-science.png";

export default {
  title: "Layouts",
  component: SectionInfo,
  argTypes: {
    actionButton: {
      variant: {
        control: {
          type: "radio",
          options: ["red", "blue"],
        },
      },
    },
    contentDirection: {
      control: {
        type: "radio",
        options: ["left", "right"],
      },
    },
  },
} as ComponentMeta<typeof SectionInfo>;

const Template: ComponentStory<typeof SectionInfo> = (args) => (
  <SectionInfo {...args} />
);

export const SectionCardInfoRightDirection = Template.bind({});
SectionCardInfoRightDirection.args = {
  title: "Compute Science",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate architecto maxime voluptatibus, ipsam, similique velit possimus dolorum qui quod nobis fugiat odio optio veniam! Tenetur tempore eaque ratione rerum similique.",
  image,
  actionButton: {
    title: "Learn More",
    variant: "red",
    onClick: () => {},
  },
  contentDirection: "right",
};

export const SectionCardInfoLeftDirection = Template.bind({});
SectionCardInfoLeftDirection.args = {
  title: "Compute Science",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate architecto maxime voluptatibus, ipsam, similique velit possimus dolorum qui quod nobis fugiat odio optio veniam! Tenetur tempore eaque ratione rerum similique.",
  image,
  actionButton: {
    title: "Learn More",
    variant: "blue",
    onClick: () => {},
  },
  contentDirection: "left",
};
