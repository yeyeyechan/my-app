import { createContext, useState } from 'react';
import React from 'react';
type UiObj = {
  modal: React.ReactElement | null;
  setModal: (value: React.ReactElement | null) => void;
  select: React.ReactElement | null;
  setSelect: (value: React.ReactElement | null) => void;
};
const modalDefault = null;
const selectDefault = null;

//<Modal isCancelClick={() => {}} isCancel={false} isShow={false} onClick={() => {}} text={''} />

export const UiContext = createContext({
  modal: modalDefault as any,
  setModal: (value: React.ReactElement | null) => {},
  select: selectDefault as any,
  setSelect: (value: React.ReactElement | null) => {}
});

const UiContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [modal, setModal] = useState<React.ReactElement | null>(modalDefault);
  const [select, setSelect] = useState<React.ReactElement | null>(selectDefault);

  const value = {
    modal: modal as null,
    setModal: (value: React.ReactElement | null) => setModal(value),
    select: select as null,
    setSelect: (value: React.ReactElement | null) => setSelect(value)
  };
  return <UiContext.Provider value={value}>{props.children}</UiContext.Provider>;
};

export default UiContextProvider;
