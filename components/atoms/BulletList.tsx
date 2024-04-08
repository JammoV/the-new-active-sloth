import type { FC } from 'react'
import { ContentTypeList } from '@/graphql/entities/Post'

interface BulletListProps {
    bulletList: ContentTypeList
}

const BulletList: FC<BulletListProps> = ({ bulletList }) => {
    return (
        <ul className="my-4">
            {bulletList.items.map((item) => (
                <li
                    key={item.identifier}
                    className="list-disc pl-2 ml-8 leading-8"
                >
                    {item.text}
                </li>
            ))}
        </ul>
    )
}

export default BulletList
