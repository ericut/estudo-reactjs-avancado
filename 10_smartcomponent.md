# Smart Components

Contém toda funcionalidade no escopo do projeto, e se preocupa como aquele escopo irá reagir na página e normalmente são reutilizáveis em várias situações

## Utilização Básica

```javascript
// component
function Gallery(props) {
  const { photos } = props;

  const [gallery, setGallery] = useState(photos);

  const handleRemove = (key) => {
    const newGallery = gallery.filter((img, index) => index !== key);
    setGallery(newGallery);
  };

  const renderPhotos = (img, key) => {
    return (
      <div key={key}>
        <img src={img} />
        <div>
          <Button onClick={() => handleRemove(key)}>Remover {key}</Button>
        </div>
      </div>
    );
  };

  return <div>{photos.map(renderPhotos)}</div>;
}

// evitando rerender desnecessário
export default memo(Gallery);
```

```javascript
// importação na página
import { Gallery } from './Gallery';

export function App() {
  const photos = [
    'http://placeimg.com/140/60/any',
    'http://placeimg.com/140/60/people',
    'http://placeimg.com/140/60/animals',
    'http://placeimg.com/140/60/any',
    'http://placeimg.com/140/60/nature',
  ];
  return (
    <>
      <h1>Galeria</h1>
      <Gallery photos={photos} />
    </>
  );
}
```
