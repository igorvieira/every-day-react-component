import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from ".";

export default {
  title: "Example/Button",
  args: {
    label: "Click me!",
    onClick: () => alert("Xablau!"),
  },
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => <Button {...args}/>
