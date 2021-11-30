import React from "react";

const date = new Date();
const currYear = date.getFullYear();

function Footer() {
    return (
        <footer id="footer">
            {/* <i class="social-icons fab fa-facebook-f"></i>
            <i class="social-icons fab fa-twitter"></i>
            <i class="social-icons fab fa-instagram"></i>
            <i class="social-icons fas fa-envelope"></i> */}
            <p>Copyright © {currYear} BitBazaar</p>

        </footer>
    );
}

export default Footer;