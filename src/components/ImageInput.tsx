import React, { useState, useCallback } from 'react';
import useSWR from 'swr';
import Unsplash, { toJson } from 'unsplash-js';
import { Input, ImageGrid, ImageGridItem } from './styled';

const unsplash = new Unsplash({
  accessKey: 'ZdNnbblhNpRvaNz83jJjYaqWNAl36J8B4qREwG0brNg',
});

type ImageResult = {
  id: string;
  alt_description: string;
  thumb: string;
  full: string;
};
type ImageResults = Array<ImageResult>;

export const comboboxStyles = { display: 'inline-block', marginLeft: '5px' };

const ImageInput: React.FC<{ name: string; register: any }> = ({
  name,
  register,
}) => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');
  const { data = [] } = useSWR<ImageResults>(query, (keyword) =>
    unsplash.search
      .photos(keyword, 1, 9, { collections: ['food', 'drink'] })
      .then(toJson)
      .then((data: any) => {
        // no time to create more types :(
        return data?.results || [];
      })
      .then((images: any[]) =>
        images.map(
          (i) =>
            ({
              id: i.id,
              alt_description: i.alt_description,
              thumb: i.urls.thumb,
              full: i.urls.full,
            } as ImageResult),
        ),
      ),
  );

  const onValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [],
  );

  const onQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    [],
  );

  const onSelectImage = useCallback((imageUrl: string) => {
    setValue(imageUrl);
  }, []);

  return (
    <div>
      <label>
        <span role="img" aria-label="Picture URL">
          🎑
        </span>
        <Input
          placeholder="Image URL"
          type="url"
          value={value}
          onChange={onValueChange}
          name={name}
          ref={register}
        />
      </label>
      <label>
        <span role="img" aria-label="Search Picture">
          🕵️‍♀️
        </span>
        <Input
          placeholder="Search Image"
          type="search"
          value={query}
          onChange={onQueryChange}
        />
      </label>
      <ImageGrid>
        {data.map((item: ImageResult, index: number) => (
          <ImageGridItem
            selected={item.full === value}
            key={`${item.id}${index}`}
            onClick={() => onSelectImage(item.full)}
          >
            <img
              src={item.thumb}
              alt={item.alt_description}
              title={item.alt_description}
            />
          </ImageGridItem>
        ))}
      </ImageGrid>
    </div>
  );
};

export default ImageInput;
