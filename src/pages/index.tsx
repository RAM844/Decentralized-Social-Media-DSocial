import {
  PublicationSortCriteria,
  useExplorePublicationsQuery
} from "@/graphql/generated"

export default function Home() {
  const { data, isLoading, error } = useExplorePublicationsQuery(
    {
      request: {
        sortCriteria: PublicationSortCriteria.TopMirrored
      }
    }
  );

  console.log({
    data,
    isLoading,
    error
  });

  return (
    <>hello world</>
  )
}
