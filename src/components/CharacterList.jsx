import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries";
import { CharacterCard } from "./CharacterCard";
import { PageSelect } from "./PageSelect";
import { Filters } from "./Filters";
import { Loading, Error } from "./LoadingError";

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    status: "",
    gender: "",
  });

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      status: filters.status || null,
      gender: filters.gender || null,
    },
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
    setPage(1);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const { characters } = data;

  return (
    <div className="character-list-container">
      <h1>Rick and Morty Characters</h1>

      <Filters filters={filters} onFilterChange={handleFilterChange} />

      <div className="character-grid">
        {characters.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <div className="pagination-container">
        <PageSelect
          page={page}
          totalPages={characters.info.pages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default CharacterList;
