// Serialize output of different incoming 'Sanity' 'block' types
const serializers = {
  types: {
    // 'type' here is strictly related to a schema types we define at the backend.
    // If we have other 'image' related types, we'll need to do the same we do for 'photo'
    photo: ({ node = {} }) => {
      const { asset, caption } = node;
      return (
        <>
          {asset ? (
            <figure>
              Image
              {caption && <figcaption>{caption}</figcaption>}
            </figure>
          ) : null}
        </>
      );
    },
  },
};

export default serializers;
