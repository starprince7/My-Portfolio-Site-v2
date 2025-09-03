import React from 'react';
import Link from 'next/link';

const SmallFooter = () => {
    return (
        <footer className="footer-half sub-bg">
          <div className="container">
            <div className="copyrights text-center mt-0">
              <p>
                © 2022, Avo Template. Made with passion by{' '}
                <Link href="#0" className="theme-camp-link">ThemesCamp</Link>.
              </p>
            </div>
          </div>
        </footer>
    )
}

export default SmallFooter
