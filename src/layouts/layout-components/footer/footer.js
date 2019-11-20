import React from 'react';


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer text-center">

          Flag Forty Two Limited. © {new Date().getFullYear()}
          {". "}All Rights Reserved. <a href="https://flag42.com">Flag42</a>

      </footer>
    );
  }
}
export default Footer;
