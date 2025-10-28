import React from 'react'
import AppLogo from './AppLogo'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faCcVisa, faCcMastercard, faApplePay, faGooglePay, faFacebook, faInstagram, faXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export default function AppFooter() {
    return (
        <footer className='p-8 flex justify-evenly'>
            <div className="flex flex-col justify-between">
                <div className="h-fit">
                    <AppLogo />
                </div>
                <div className="">
                    <div className="flex space-x-2 text-gray-500">
                        <FontAwesomeIcon icon={faPaypal} size='lg' />
                        <FontAwesomeIcon icon={faCcVisa} size='lg' />
                        <FontAwesomeIcon icon={faCcMastercard} size='lg' />
                    </div>
                    <div className="flex space-x-3 mt-2 text-gray-500">
                        <FontAwesomeIcon icon={faApplePay} size='2x' />
                        <FontAwesomeIcon icon={faGooglePay} size='2x' />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex space-x-8">
                    <div>
                        <h3 className="font-bold text-lg mb-2">Company</h3>
                        <Link href="/about" className="text-md text-gray-500 block">About</Link>
                        <Link href="/careers" className="text-md text-gray-500 block">Careers</Link>
                        <Link href="/press" className="text-md text-gray-500 block">Press</Link>
                        <Link href="/contact" className="text-md text-gray-500 block">Contact</Link>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">Products</h3>
                        <Link href="/products" className="text-md text-gray-500 block">All Products</Link>
                        <Link href="/pricing" className="text-md text-gray-500 block">Pricing</Link>
                        <Link href="/demo" className="text-md text-gray-500 block">Demo</Link>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">Resources</h3>
                        <Link href="/docs" className="text-md text-gray-500 block">Documentation</Link>
                        <Link href="/blog" className="text-md text-gray-500 block">Blog</Link>
                        <Link href="/community" className="text-md text-gray-500 block">Community</Link>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">Support</h3>
                        <Link href="/help" className="text-md text-gray-500 block">Help Center</Link>
                        <Link href="/faq" className="text-md text-gray-500 block">FAQ</Link>
                        <Link href="/support" className="text-md text-gray-500 block">Contact Support</Link>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">Legal</h3>
                        <Link href="/privacy" className="text-md text-gray-500 block">Privacy Policy</Link>
                        <Link href="/terms" className="text-md text-gray-500 block">Terms of Service</Link>
                        <Link href="/sitemap.xml" className="text-md text-gray-500 block">Sitemap</Link>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex space-x-1 text-gray-500">
                            <FontAwesomeIcon icon={faFacebook} size='lg' />
                            <FontAwesomeIcon icon={faInstagram} size='lg' />
                            <FontAwesomeIcon icon={faXTwitter} size='lg' />
                            <FontAwesomeIcon icon={faTelegram} size='lg' /> 
                        </div>
                        <h2 className='text-sm text-gray-500'><FontAwesomeIcon icon={faCopyright} />Copyrights reserved. 2025</h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}