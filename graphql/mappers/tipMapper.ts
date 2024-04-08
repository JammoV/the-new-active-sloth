import { ContentTypeTip, JSONContent } from '@/graphql/entities/Post'
import { TipType } from '@/atoms/Tip'

const tipMapper = (content: JSONContent, index: number): ContentTypeTip => {
    return {
        type: 'tip',
        tipType: (content.attrs?.data.type || TipType.GENERAL) as TipType,
        identifier: `tip-${index}`,
        html: content.attrs?.data.text || '',
    }
}

export default tipMapper
