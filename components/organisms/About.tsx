import Image from 'next/image'
import type { FC } from 'react'
import aboutImg from '@/public/images/the-active-sloth.png'

const About: FC = () => {
    return (
        <div className="py-24">
            <div className="bg-green p-8 mx-auto w-1/2">
                <div className="text-center text-white text-2xl font-fira">
                    <span className="font-light">Wie is</span>{' '}
                    <span className="font-semibold">The Active Sloth?</span>
                </div>
                <div className="flex flex-row items-center pt-4">
                    <div className="flex-1 p-6">
                        <Image src={aboutImg} alt="Wie is The Active Sloth?" />
                    </div>
                    <div className="flex-1 p-6">
                        Hoi! Ik ben Eline, de verhalenschrijfster achter deze
                        reiswebsite. Je vindt hier van alles wat met reizen te
                        maken heef: van stedentrips tot verre reizen.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
