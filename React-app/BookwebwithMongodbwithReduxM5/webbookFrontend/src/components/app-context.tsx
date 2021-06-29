import {createContext} from "react"

interface AppContext{
    siteTitle:String;
    supportEmail:String;
}

const context = createContext<AppContext>({
    siteTitle:"site title",
    supportEmail:"support@"
});

export default context;
