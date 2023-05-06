import styles from "../styles/Home.module.css";
import { PublicationSortCriteria, useExplorePublicationsQuery } from "@/graphql/generated";
import FeedPost from "@/components/FeedPost";

export default function Home() {

  const { isLoading, error, data } = useExplorePublicationsQuery({
    request: {
      sortCriteria: PublicationSortCriteria.Latest,
    },
  },
    {
      // Don't refetch the user comes back
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  console.log(data);

  if (error) {
    return (<div className={styles.container}>error...</div>);
  }

  if (isLoading) {
    return (<div className={styles.container}>Loading...</div>);
  }

  return (
    <div className={styles.container}>
      { /* Iterate over the array of items inside the data field */}
      <div className={styles.postsContainer}>
        {data?.explorePublications.items.map((publication) => (
          <FeedPost publication={publication} key={publication.id} />
        ))}
      </div>
    </div>
  );

}

