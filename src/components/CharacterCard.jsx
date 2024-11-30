export function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div className="character-info">
        <h3>{character.name}</h3>
        <p>
          <strong>Status:</strong> {character.status}
        </p>
        <p>
          <strong>Species:</strong> {character.species}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
        {character.type && (
          <p>
            <strong>Type:</strong> {character.type}
          </p>
        )}
        <p>
          <strong>Origin:</strong> {character.origin.name}
        </p>
        <p>
          <strong>Location:</strong> {character.location.name}
        </p>
      </div>
    </div>
  );
}
