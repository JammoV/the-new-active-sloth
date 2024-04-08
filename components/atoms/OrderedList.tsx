import type { FC } from 'react'
import { ContentTypeList } from '@/graphql/entities/Post'

interface OrderedListProps {
    orderedList: ContentTypeList
}

const OrderedList: FC<OrderedListProps> = ({ orderedList }) => {
    return (
        <ol className="my-4">
            {orderedList.items.map((item) => (
                <li
                    key={item.identifier}
                    className="list-decimal pl-2 ml-8 leading-8"
                >
                    {item.text}
                </li>
            ))}
        </ol>
    )
}

export default OrderedList
