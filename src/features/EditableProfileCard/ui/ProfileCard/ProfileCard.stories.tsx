import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'features/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: 'Николай',
    lastname: 'Кокорев',
    age: 25,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar,
  },
};

export const isLoading = Template.bind({});
isLoading.args = {
  isLoading: true,
};

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};
