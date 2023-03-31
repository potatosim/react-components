import { AppRoutes } from 'enum/AppRoutes';
import { useLocation, useNavigate } from 'react-router-dom';
import { PagesNames } from 'enum/PagesNames';
import { TestId } from 'enum/TestId';
import styles from './Header.module.scss';
import { uid } from 'uid';
import { useEffect, useState } from 'react';

const pageNames: Record<AppRoutes, { name: PagesNames; linkTestId: TestId }> = {
  [AppRoutes.Home]: {
    name: PagesNames.Home,
    linkTestId: TestId.HomePageLink,
  },
  [AppRoutes.AboutUs]: {
    name: PagesNames.AboutUs,
    linkTestId: TestId.AboutPageLink,
  },
  [AppRoutes.Form]: {
    name: PagesNames.Form,
    linkTestId: TestId.FormPageLink,
  },
};

const getPageName = (page: AppRoutes) => {
  switch (page) {
    case AppRoutes.AboutUs:
      return PagesNames.AboutUs;
    case AppRoutes.Home:
      return PagesNames.Home;
    case AppRoutes.Form:
      return PagesNames.Form;
    default:
      return null as never;
  }
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageName, setPageName] = useState<PagesNames>(PagesNames.Home);

  useEffect(() => {
    const updatedName = getPageName(location.pathname as AppRoutes);
    setPageName(updatedName);
  }, [location]);

  return (
    <header data-testid={TestId.Header} className={styles.header}>
      <h2 data-testid={TestId.HeaderTitle}>{pageName}</h2>
      <div className={styles.linksWrapper}>
        {Object.entries(pageNames).map(([route, { name, linkTestId }]) => (
          <button
            className={styles.link}
            key={uid()}
            data-testid={linkTestId}
            onClick={() => navigate(route)}
          >
            {name}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
