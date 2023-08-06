import axios from "axios";
import cardStyles from "@/styles/common/card.module.css";
import Image from "next/image";

async function PoketmonList() {
  const data = await getServerSideProps();

  return (
    <>
      <ul>
        {data?.map((item: any, index: number) => (
          <li key={index} className={cardStyles.wrapper}>
            <div className={cardStyles.card}>
              <div className={cardStyles.img}>
                <Image
                  src={item.imageUrl}
                  alt={item.krName}
                  width={100}
                  height={100}
                />
              </div>

              <dl>
                <div>
                  <dt>code</dt>
                  <dd className={cardStyles.serialNumber}>No.{index + 1}</dd>
                </div>
                <div>
                  <dt>name</dt>
                  <dd className={cardStyles.name}>{item.krName}</dd>
                </div>
                <div>
                  <dt>type</dt>
                  <dd>
                    {item.types && item.types.length > 0
                      ? item.types.map((type: string, index: number) => (
                          <span
                            key={index}
                            className={
                              cardStyles.badge + " " + cardStyles[type]
                            }
                          >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </span>
                        ))
                      : null}
                  </dd>
                </div>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

type PokemonData = {
  name: string;
  url: string;
  imageUrl: string;
  krName: string;
  types: any[];
};

export async function getServerSideProps() {
  const POKEMON_NUM = 898;
  const TYPE_NUM = 18;
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?limit=${POKEMON_NUM}`
  );
  const res = response.data.results;
  const data = res.map((item: any) => ({
    ...item,
    types: [],
  }));
  const koreanNames: string[] = [];
  const pokeUrls: string[] = [];
  if (res) {
    for (let i = 0; i < TYPE_NUM; i++) {
      let url = "https://pokeapi.co/api/v2/type/" + (i + 1);
      let response = await axios(url);
      let responseAsJson = await response.data;

      const pokemonInType = responseAsJson.pokemon;

      for (let j = 0; j < pokemonInType.length; j++) {
        const pokemonId = pokemonInType[j].pokemon.url
          .replace("https://pokeapi.co/api/v2/pokemon/", "")
          .replace("/", "");

        if (data[pokemonId]) {
          data[pokemonId - 1]?.types?.push(responseAsJson.name);
        }
      }
    }

    for (let i = 0; i < POKEMON_NUM; i++) {
      let url = `https://pokeapi.co/api/v2/pokemon-species/${i + 1}`;
      pokeUrls.push(url);
    }

    let responses = await Promise.all(pokeUrls.map((url) => axios.get(url)));
    for (let index = 0; index < responses.length; index++) {
      const result = responses[index].data;
      const koreanName =
        (result.names?.find((name: any) => name.language.name === "ko") || {})
          .name || "";
      koreanNames.push(koreanName);
    }

    const pokemonData: PokemonData[] = data.map((item: any, index: number) => {
      return {
        ...item,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
        krName: koreanNames[index],
      };
    });

    return pokemonData;
  }
}

export default PoketmonList;
