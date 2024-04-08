import type { FC } from 'react'
import { ContentTypeParagraph } from '@/graphql/entities/Post'

interface ParagraphProps {
    paragraph: ContentTypeParagraph
}

const Paragraph: FC<ParagraphProps> = ({ paragraph }) => {
    return (
        <p key={paragraph.identifier}>
            {paragraph.text.map((text, index) => {
                if (text.style) {
                    switch (text.style) {
                        case 'bold':
                            return (
                                <strong
                                    key={`${paragraph.identifier}-${index}-bold`}
                                >
                                    {text.text}
                                </strong>
                            )
                        case 'italic':
                            return (
                                <i
                                    key={`${paragraph.identifier}-${index}-italic`}
                                >
                                    {text.text}
                                </i>
                            )
                        case 'strike':
                            return (
                                <s
                                    key={`${paragraph.identifier}-${index}-strike`}
                                >
                                    {text.text}
                                </s>
                            )
                        default:
                            return text.text
                    }
                }

                return text.text
            })}
        </p>
    )
}

export default Paragraph
