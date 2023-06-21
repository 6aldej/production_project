import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

import cls from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
  ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers:ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(
  (props : ArticleDetailsProps) => {
    const { className, id } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        );
      default:
        return null;
      }
    }, []);

    useEffect(() => {
      if (__PROJECT__ !== 'storybook') {
        dispatch(fetchArticleById(id));
      }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
      content = (
        <>
          <div
            className={cls.avatarWrapper}
          >
            <Skeleton
              width={200}
              height={200}
              border="50%"
            />
          </div>

          <Skeleton
            width={300}
            height={35}
            className={cls.title}
          />
          <Skeleton
            width={600}
            height={25}
            className={cls.skeleton}
          />
          <Skeleton
            width={100}
            height={20}
            className={cls.title}
          />
          <Skeleton
            width={100}
            height={20}
            className={cls.title}
          />

          <Skeleton
            width="100%"
            height={200}
            className={cls.skeleton}
          />
          <Skeleton
            width="100%"
            height={200}
            className={cls.skeleton}
          />
        </>
      );
    } else if (error) {
      content = (
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          className={cls.title}
          title={t('Произошла ошибка при загрузке статьи')}
        />
      );
    } else {
      content = (
        <>
          <div
            className={cls.avatarWrapper}
          >
            <Avatar
              size={200}
              src={article?.img}
            />
          </div>
          <Text
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />
          <div className={cls.articleInfo}>
            <Icon Svg={EyeIcon} />
            <Text text={String(article?.views)} />
          </div>
          <div className={cls.articleInfo}>
            <Icon Svg={CalendarIcon} />
            <Text text={article?.createdAt} />
          </div>
          {article?.blocks.map(renderBlock)}
        </>
      );
    }

    return (
      <DynamicModuleLoader
        reducers={reducers}
        removeAfterUnmount
      >
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
          {content}
        </div>
      </DynamicModuleLoader>
    );
  },
);
