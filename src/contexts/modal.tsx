import React, { PropsWithChildren } from "react";
import useModal from "./../hooks/modal";
import ModalComponent from "../components/modal";

let ModalContext:any;
let { Provider } = (ModalContext = React.createContext({}));

const  ModalProvider :React.FC<Props>= ({ children }) => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <ModalComponent /> 
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };


export interface Props extends PropsWithChildren<any> {}