import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(
  ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
      setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
      setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
      dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
      return (
        <div className={classNames(cls.navbar, {}, [className])}>
          <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={onLogout}
            className={cls.links}
          >
            {t('Выйти')}
          </Button>
        </div>
      );
    }

    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onOpenModal}
          className={cls.links}
        >
          {t('Войти')}
        </Button>
        {
          isAuthModal && (
            <LoginModal
              isOpen={isAuthModal}
              onClose={onCloseModal}
            />
          )
        }
      </div>
    );
  },
);
