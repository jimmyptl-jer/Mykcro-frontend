import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Toast from '../components/Toast';

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {

  const [toast, setToast] = useState()


  return (
    <AppContext.Provider value={{
      showToast: (toastMessage) => {
        setToast(toastMessage)
      }
    }}>
      {toast && (<Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast(undefined)} />)}
      {children}
    </AppContext.Provider >
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}