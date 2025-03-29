// CharacterDisplay.tsx
import ModelViewer from "@/components/3Dmodels/ModelViewer";
import { characters } from "@/data/mockdata";
import { useRef } from "react";


const CharacterDisplay = ({ index }: { index: number }) => {
  const character = characters[index];
  const group = useRef(null);

  return (
    <group ref={group}>
      <ModelViewer
        folder={character.folder}
        file={character.file}
        textures={character.textures}
      />
    </group>
  );
};

export default CharacterDisplay;
