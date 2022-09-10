import TitleBar from "./titlebar";
import FooterPage from "./footer";

export default function Layout({children}) {
    return (
        <>
            <TitleBar />
            <main>{children}</main>
            {/* <FooterPage /> */}
        </>
    )
}