function Footer() {
    const email = "developer@wbscodingschool.de"
    const mailto = "mailto:" + email;
    return (
        <div className="footer">
            <span>developed by André, Thomas, Tilo</span>
            <a href={mailto}>{email}</a>
        </div>
    );
}
 
export default Footer;