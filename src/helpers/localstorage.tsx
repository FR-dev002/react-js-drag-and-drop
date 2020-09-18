const LocalStorage = () => {
    const key:any = process.env.REACT_APP_CUSTOM_LOCALSTORAGE_KEY;
    const user_key:any = process.env.REACT_APP_CUSTOM_LOCALSTORAGE_ROLE;

    const setToken = (token:any) => {
      localStorage.setItem(
        btoa(key),
        JSON.stringify(token)
      );
    };
  
    const setUser = (user:any) => {
      localStorage.setItem(
        btoa(user_key),
        btoa(JSON.stringify(user))
      );
    };
  
    const getToken = () => {
      const token = localStorage.getItem(btoa(key));
      if (token) {
        return JSON.parse(token);
      } else {
        return null;
      }
    };
  
    const getUser = () => {
      const user = localStorage.getItem(btoa(user_key));
      if (user) {
        return JSON.parse(window.atob(user));
      } else {
        return null;
      }
    };
  
    const expiredToken = () => {
      const token = getToken();
      if (token) {
        const {exp} = JSON.parse(atob(token.split('.')[1]));
        if (exp < Date.now() / 1000) {
          localStorage.clear();
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    };
  
    const clearToten = () => {
      localStorage.clear();
    };
  
    return {
      setToken,
      setUser,
      getToken,
      getUser,
      expiredToken,
      clearToten
    };
  };
  
  export default LocalStorage;
  