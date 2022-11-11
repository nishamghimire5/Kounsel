import TitleBar from "./titlebar";
import FooterPage from "./footer";

export default function Layout({ children }) {
    return (
        <>
            <TitleBar />
            <main>{children}</main>
            <div style={{position: 'relative', top: '90rem'}}>
            <FooterPage />
            </div>
        </>
    )
}