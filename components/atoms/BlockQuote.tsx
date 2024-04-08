import type { FC } from 'react'
import { ContentTypeBlockQuote } from '@/graphql/entities/Post'

interface BlockQuoteProps {
    blockQuote: ContentTypeBlockQuote
}

const BlockQuote: FC<BlockQuoteProps> = ({ blockQuote }) => {
    return (
        <div className={`bg-sand border-l-4 p-4 my-4 border-orange mb-8`}>
            {blockQuote.text}
        </div>
    )
}

export default BlockQuote
