import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { Currency } from 'entities/Currency/model/types/currency';
import { useCallback } from 'react';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = Object.entries(Currency).map((val) => ({ value: val[0], content: val[1] }));

export const CurrencySelect = (props : CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  const { t } = useTranslation();

  return (
    <Select
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      label={t('Укажите валюту')}
      className={classNames('', {}, [className])}
      options={options}
    />
  );
};
