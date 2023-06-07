import React, { createContext, ReactNode, useState } from 'react';
import Page from '../model/page';
import { produce } from 'immer';

type PageObj = {
  page: Page;
  setCurrentPage: (currentPage: number) => void;
};
export const PageContext = createContext<PageObj>({
  page: { currentPageNo: 1 },
  setCurrentPage: () => {}
});

const PageContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [page, setPage] = useState<Page>({
    currentPageNo: 1
  });

  const setCurrentPageHandler = (cp: number) => {
    setPage(
      produce((draft) => {
        draft.currentPageNo = cp;
      })
    );
  };
  const value: PageObj = {
    page: page,
    setCurrentPage: setCurrentPageHandler
  };
  return <PageContext.Provider value={value}>{props.children}</PageContext.Provider>;
};
export default PageContextProvider;
