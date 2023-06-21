import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className } : ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();

  if (!id && __PROJECT__ !== 'storybook') {
    return (
      <Text
        title={t('Статья не найдена')}
        theme={TextTheme.ERROR}
      />
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id!} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
