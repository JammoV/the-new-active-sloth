import Image from 'next/image'
import type { FC } from 'react'
import aboutImg from '@/public/images/ElineSurfSkate.jpeg'
import kofferImg from '@/public/images/doodle/primary/koffer.png'
import ScrollDown from '@/atoms/ScrollDown'

const About: FC = () => {
    return (
        <div className="h-dvh relative flex flex-col items-center bg-primary-light tablet:min-h-[700px]">
            <div className="h-[60px] desktop:h-[100px] absolute left-0 top-0 w-full bg-[url('/images/doodle/primary/tegel.png')] bg-contain opacity-50"></div>
            <div className="h-[60px] desktop:h-[100px] absolute left-0 bottom-0 w-full bg-[url('/images/doodle/primary/tegel.png')] bg-contain  opacity-50"></div>
            <div className="h-full mx-auto tablet:w-2/3 flex flex-col tablet:flex-row items-center justify-center gap-md tablet:gap-lg">
                <div className="w-[200px] text-right  tablet:w-auto tablet:flex-1">
                    <div className="inline-block ml-auto  border-dashed border-white border-2 p-2">
                        <Image
                            src={aboutImg}
                            width={400}
                            className="ml-auto border-[10px]  shadow"
                            alt="Eline, de verhalenschrijfster van The Active Sloth"
                        />
                    </div>
                </div>
                <div className="px-lg tablet:px-0 tablet:flex-1 flex flex-col gap-sm text-center tablet:text-left ">
                    <div className="px-md tablet:px-0 font-noto text-2xl tablet:text-3xl">
                        <span className="font-bold ">Hoi!</span> Ik ben Eline
                    </div>
                    <p className="px-md tablet:px-0 tablet:text-lg max-w-[340px]">
                        Welkom op mijn persoonlijke travel blog{' '}
                        <b>The Active Sloth!</b>
                    </p>
                    <p className="px-md mb-sm tablet:px-0 tablet:text-lg max-w-[360px]">
                        Of je nu houdt van actief avontuur of juist van
                        ontspannen momenten, hier vind je tips, verhalen en
                        inspiratie om het beste van beide werelden te
                        combineren.
                    </p>
                    <ScrollDown
                        label="Bekijk mijn artikelen"
                        className="self-center tablet:self-start"
                        toPage={2}
                    />
                </div>
            </div>
            <div className="absolute bottom-[60px] right-[20px] w-[60px]  mobile:w-[80px] tablet:w-[120px] tablet:h-[200px] desktop:bottom-[100px] desktop:right-[100px] ">
                <Image
                    src={kofferImg}
                    width={200}
                    className="absolute bottom-0 right-0 opacity-50"
                    alt="Koffer"
                />
            </div>
        </div>
    )
}

export default About
