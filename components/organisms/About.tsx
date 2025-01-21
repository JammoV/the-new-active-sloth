import Image from 'next/image'
import type { FC } from 'react'
import aboutImg from '@/public/images/Eline.png'

const About: FC = () => {
    return (
        <div className="py-lg tablet:py-xl">
            <div className="mx-auto desktop:w-2/3">
                <div className="flex flex-col tablet:flex-row items-center gap-lg">
                    <div className="w-1/2 tablet:w-autotablet:flex-1">
                        <Image
                            src={aboutImg}
                            width={280}
                            className="ml-auto border-[10px] -rotate-6 border-white shadow"
                            alt="Eline, de verhalenschrijfster van The Active Sloth"
                        />
                    </div>
                    <div className="tablet:flex-1 flex flex-col gap-sm">
                        <div className="px-md tablet:px-0 font-noto text-3xl">
                            <span className="font-bold">Hoi!</span> Ik ben Eline
                        </div>
                        <p className="px-md tablet:px-0 text-lg">
                            Welkom op mijn persoonlijke travel blog{' '}
                            <b>The Active Sloth!</b>
                        </p>
                        <p className="px-md tablet:px-0 text-lg">
                            Of je nu houdt van actief avontuur of juist van
                            ontspannen momenten, hier vind je tips, verhalen en
                            inspiratie om het beste van beide werelden te
                            combineren.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
