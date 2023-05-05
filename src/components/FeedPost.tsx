import { ExplorePublicationsQuery } from '@/graphql/generated';
import React from 'react';
import styles from "../styles/FeedPost.module.css";
import { MediaRenderer } from '@thirdweb-dev/react';
import Link from 'next/link';
type Props = {
    publication: ExplorePublicationsQuery["explorePublications"]["items"]["0"];
};

export default function FeedPost({ publication }: Props) {
    console.log(publication);

    return (
        <div className={styles.feedPostContainer}>
            <div className={styles.feedPostHeader}>
                {/* Author Profile picture */}
                <MediaRenderer
                    // @ts-ignore
                    src={publication?.profile?.picture?.original?.url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRFfdoiAytXb9La4zYInK2y3Qp8Cc8_qfIrEmQnIBzCuM-H-NBkZ9ynPl35aUVjNzhvU&usqp=CAU"}
                    alt={publication.profile.name || publication.profile.handle}
                    className={styles.feedPostProfilePicture}
                    style={{ width: 48, height: 48, borderRadius: "50%", border: "1px solid black" }}
                />

                {/* Author profile Name */}
                <Link
                    href={`/profile/${publication.profile.handle}`}
                    className={styles.feedPostProfileName}
                >
                    {publication.profile.name || publication.profile.handle}
                </Link>
            </div>

            <div className={styles.feedPostContent}>
                {/* Name of the post */}
                <h3 className={styles.feedPostContentTitle}>
                    {publication.metadata.name}
                </h3>

                {/* Description of the post */}
                <p className={styles.feedPostContentDescription}>
                    {publication.metadata.content}
                </p>

                {/* Image / media of the post if there is one */}
                {(publication.metadata.media?.length > 0) && (
                    <MediaRenderer
                        src={
                            publication.metadata.media[0].original.url
                        }
                        alt={publication.metadata.name || ""}
                        className={styles.feedPostContentImage}
                        style={{ height: 256, alignItems: "center", display: "inline-block", borderRadius: "5%" }}
                    />
                )}
            </div>

            <div className={styles.feedPostFooter}>
                <p>{publication.stats.totalAmountOfCollects} Collects</p>
                <p>{publication.stats.totalAmountOfComments} Comments</p>
                <p>{publication.stats.totalAmountOfMirrors} Mirrors</p>
            </div>
        </div>
    );
}