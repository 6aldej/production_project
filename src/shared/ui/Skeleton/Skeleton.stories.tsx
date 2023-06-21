import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  height: 300,
  width: '100%',
  border: '30px',
};

export const NormalDark = Template.bind({});
NormalDark.args = {
  height: 300,
  width: '100%',
  border: '30px',
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Circle = Template.bind({});
Circle.args = {
  height: 300,
  width: 300,
  border: '50%',
};

export const NormalCircleDark = Template.bind({});
NormalCircleDark.args = {
  height: 300,
  width: 300,
  border: '50%',
};
NormalCircleDark.decorators = [ThemeDecorator(Theme.DARK)];
