import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = Object.entries(Country).map((val) => ({ value: val[0], content: val[1] }));

export const CountrySelect = (props : CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  const { t } = useTranslation();

  return (
    <Select
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      label={t('Укажите страну')}
      className={classNames('', {}, [className])}
      options={options}
    />
  );
};
