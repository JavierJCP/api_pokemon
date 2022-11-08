import { useEffect, useState } from 'react';

function ImgPokemon({ url }) {
  const [urlImg, setUrlImg] = useState('');

  useEffect(() => {
    (async function () {
      const img_request = await fetch(url);
      const data = await img_request.json();
      const img = data.sprites.front_default;
      setUrlImg(img);
    })();
  }, [url]);
  return (
    <div>
      <img src={urlImg} alt='pokemon icon' className='pokemon_img' />
    </div>
  );
}

export default ImgPokemon;
