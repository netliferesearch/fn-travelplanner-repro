import React, { createContext, useState } from 'react';

const ToastContext = createContext({
  toastMessage: '',
  showToast: false,
  setShowToast: () => null,
  setToastMessage: () => null,
});

const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  return (
    <ToastContext.Provider
      value={{
        showToast,
        toastMessage,
        setShowToast,
        setToastMessage,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
