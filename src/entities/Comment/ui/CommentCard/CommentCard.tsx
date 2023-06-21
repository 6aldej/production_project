import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = (props : CommentCardProps) => {
  const {
    className,
    comment: {
      user: {
        username,
        avatar,
      },
      text,
    },
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton
            width={30}
            height={30}
            border="50%"
          />
          <Skeleton
            width={110}
            height={30}
          />
        </div>
        <Skeleton
          width="100%"
          height={50}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {
          avatar ? (
            <Avatar
              src={avatar}
              size={30}
            />
          ) : null
        }
        <Text
          text={username}
        />
      </div>
      <Text
        className={cls.text}
        text={text}
      />
    </div>
  );
};
