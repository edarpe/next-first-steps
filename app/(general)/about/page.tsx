import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Edwin's Portfolio - About",
    description: 'Contact Edwin for more information.',
    keywords: ['About Page', 'Edwin', 'Portfolio', 'About']
}


export default function AboutPage() {
    return (
        <>
            <span className='text-7xl'>About Page</span>
        </>
    )
}
