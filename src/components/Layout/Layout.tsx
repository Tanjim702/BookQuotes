import { FC } from "react"
import "./Layout.css"
const Layout:FC = ({children}) => {
    return (
        <div className="layout">
            {children}
        </div>
    )
}
export default Layout