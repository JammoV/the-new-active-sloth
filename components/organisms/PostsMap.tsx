'use client'

import type { FC } from 'react'
import { useRef, useState, useEffect, cloneElement } from 'react'

import type { ICategory } from '@/graphql/entities/Category'
import type { IPost } from '@/graphql/entities/Post'
import MapPopup from '@/molecules/MapPopup'
import type { MarkerProps } from '@/molecules/Marker'
import Marker from '@/molecules/Marker'

import MapStyles from '@/lib/MapStyles'

interface PostsMapProps extends google.maps.MapOptions {
    categoryFilter: ICategory | null
    onClick?: (e: google.maps.MapMouseEvent) => void
    onIdle?: (map: google.maps.Map) => void
    posts: IPost[]
}

const defaultCenter = {
    lat: 33.8616226,
    lng: 63.2124532,
}
const defaultZoom = 3

const PostsMap: FC<PostsMapProps> = ({ posts, categoryFilter = null }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [map, setMap] = useState<google.maps.Map>()
    const [activePost, setActivePost] = useState<IPost | null>(null)

    const onMarkerClick = (options: MarkerProps): void => {
        const post = posts.find((post) => post.id.toString() === options.id)
        setActivePost(null)

        if (post) {
            setTimeout((): void => {
                setActivePost(post)
            }, 500)

            if (options.position) {
                map?.setCenter(options.position)
                map?.setZoom(5)
            }
        }
    }

    useEffect(() => {
        if (categoryFilter) {
            map?.setCenter(categoryFilter.location || defaultCenter)
            map?.setZoom(categoryFilter.mapZoom)
        } else {
            map?.setCenter(defaultCenter)
            map?.setZoom(defaultZoom)
        }
    }, [categoryFilter, map])

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    center: {
                        lat: 33.8616226,
                        lng: 63.2124532,
                    },
                    zoom: 3,
                    styles: MapStyles,
                })
            )
        }
    }, [ref, map])

    return (
        <div className="relative">
            <MapPopup post={activePost} active={activePost !== null} />
            <div>
                <div ref={ref} className="w-full min-h-[600px]" />
                {posts.flatMap((post: IPost) => {
                    if (!post.location) {
                        return []
                    }

                    return cloneElement(
                        <Marker
                            key={post.id}
                            position={post.location}
                            icon={{
                                url:
                                    activePost?.id === post.id
                                        ? 'images/MarkerActive.png'
                                        : 'images/Marker.png',
                                scaledSize: new google.maps.Size(25, 34),
                            }}
                            clickable={true}
                            title={post.title}
                            opacity={1}
                            id={post.id.toString()}
                            onClick={onMarkerClick}
                        />,
                        { map }
                    )
                })}
            </div>
        </div>
    )
}

export default PostsMap
