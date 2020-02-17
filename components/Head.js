import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return(
        <React.Fragment>
            <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    
            <link rel="stylesheet" type="text/css" href="./vendor/bootstrap/css/bootstrap.min.css" />
   
            <link rel="stylesheet" href="vendor/slick/slick.css"/>
            <link rel="stylesheet" href="vendor/slick/slick-theme.css"/>
            
            <link rel="stylesheet" type="text/css" href="./vendor/fontawesome/css/all.css" />
            <link rel="stylesheet" type="text/css" href="css/header-footer.css" />
            <link rel="stylesheet" type="text/css" href="css/style-index.css" />
            <link rel="stylesheet" type="text/css" href="css/style-about.css" />
            <link rel="stylesheet" type="text/css" href="css/style-course.css" />
            <link rel="stylesheet" type="text/css" href="css/style-promo.css" />
            <link rel="stylesheet" type="text/css" href="css/style-contact.css" />
            <link rel="stylesheet" type="text/css" href="css/style-blog.css" />
            
            <title>GYMZONE</title>
            <link rel="shortcut icon" type="image/png" href="./img/icon/favicon.png" />
            </Head>
            <Header/>
            {props.children}
            <Footer/>
        </React.Fragment>
    )
}

export default Layout;