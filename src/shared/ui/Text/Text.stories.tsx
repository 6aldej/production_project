import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae ratione dolores ipsum animi inventore deleniti, laboriosam dolor, architecto, minus necessitatibus ea quo quidem. Sit maxime esse mollitia sed perspiciatis?',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae ratione dolores ipsum animi inventore deleniti, laboriosam dolor, architecto, minus necessitatibus ea quo quidem. Sit maxime esse mollitia sed perspiciatis?',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae ratione dolores ipsum animi inventore deleniti, laboriosam dolor, architecto, minus necessitatibus ea quo quidem. Sit maxime esse mollitia sed perspiciatis?',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae ratione dolores ipsum animi inventore deleniti, laboriosam dolor, architecto, minus necessitatibus ea quo quidem. Sit maxime esse mollitia sed perspiciatis?',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae ratione dolores ipsum animi inventore deleniti, laboriosam dolor, architecto, minus necessitatibus ea quo quidem. Sit maxime esse mollitia sed perspiciatis?',
  theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae ratione dolores ipsum animi inventore deleniti, laboriosam dolor, architecto, minus necessitatibus ea quo quidem. Sit maxime esse mollitia sed perspiciatis?',
  theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  size: TextSize.L,
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae ratione dolores ipsum animi inventore deleniti, laboriosam dolor, architecto, minus necessitatibus ea quo quidem. Sit maxime esse mollitia sed perspiciatis?',
};
