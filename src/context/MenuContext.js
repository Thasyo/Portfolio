import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({children}) => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <MenuContext.Provider value={{isVisible, setIsVisible}}>
            {children}
        </MenuContext.Provider>
    )

}

export const useMenuContext = () => {
    return useContext(MenuContext);
}