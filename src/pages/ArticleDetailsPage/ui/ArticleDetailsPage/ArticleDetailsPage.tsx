import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleCommentListReducer,
  getArticleCommentListIsLoading,
  getArticleComments,
  fetchCommentsByArticleId,
} from 'features/ArticleCommentList';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers:ReducersList = {
  articleCommentList: articleCommentListReducer,
};

const ArticleDetailsPage = ({ className } : ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentListIsLoading);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id && __PROJECT__ !== 'storybook') {
    return (
      <Text
        title={t('Статья не найдена')}
        theme={TextTheme.ERROR}
      />
    );
  }

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id!} />
        <Text
          title={t('Комментарии')}
          className={cls.commentTitle}
        />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
