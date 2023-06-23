# use-typewriter-animation

> A skeleton loader library for React.

## Install

```bash
yarn add skeleton-react-loader
npm i skeleton-react-loader
```

</br>

## Components

### Row

> Row Skeleton Loader which has wide range of use.

```tsx
import { Row } from 'skeleton-react-loader'

const MyComponent = () => {
  return <Row duration={1} radius={6} color='#f0f0f0' />
}
```

### RowProps

| property        |        type        |    \*    | default |
| --------------- | :----------------: | :------: | ------- |
| `height`        |  number or string  | optional | 50      |
| `width`         |  number or string  | optional | "100%   |
| `radius`        |       number       | optional | 12      |
| `duration (s)`  |       number       | optional | 30      |
| `color`         |       string       | optional |         |
| `opacityPoints` |      number[]      | optional |         |
| `easing`        | Easing or Easing[] | optional |         |

### Circle

> Circle Skeleton Loader for circular components. e.g Profile picture .

```tsx
import { Circle } from 'skeleton-react-loader'

const MyComponent = () => {
  return <Circle duration={1} size={50} color='#f0f0f0' />
}
```

### CircleProps

| property        |        type        |    \*    | default |
| --------------- | :----------------: | :------: | ------- |
| `size`          |       number       | optional | 100     |
| `radius`        |       number       | optional |         |
| `duration (s)`  |       number       | optional |         |
| `color`         |       string       | optional |         |
| `opacityPoints` |      number[]      | optional |         |
| `easing`        | Easing or Easing[] | optional |         |

### ImageLoader

> Skeleton Loader that contains custom image/logo.

```tsx
import { ImageLoader } from 'skeleton-react-loader'

const MyComponent = () => {
  return <ImageLoader duration={1} size={50} color='#f0f0f0' />
}
```

### ImageLoaderProps

| property        |        type        |    \*    | default |
| --------------- | :----------------: | :------: | ------- |
| `withImage`     |      boolean       | optional | true    |
| `radius`        |       number       | optional | 12      |
| `duration (s)`  |       number       | optional |         |
| `bg`            |       string       | optional | -       |
| `opacityPoints` |      number[]      | optional | -       |
| `src`           |       string       | optional | -       |
| `easing`        | Easing or Easing[] | optional | -       |
| `width`         |  string or number  | optional | -       |
| `height`        |  string or number  | optional | -       |
| `imageWidth`    |  string or number  | optional | '40%'   |
| `imageHeight`   |  string or number  | optional | '40%'   |

### TabLoader

> Tab Skeleton Loader for components which inludes tab(s).

```tsx
import { TabLoader } from 'skeleton-react-loader'

const MyComponent = () => {
  return <TabLoader tabCount={3} tabHeight={50} duration={1} color='#f0f0f0' bg='red' />
}
```

### TabLoaderProps

| property        |        type        |    \*    | default |
| --------------- | :----------------: | :------: | ------- |
| `radius`        |       number       | optional | 12      |
| `duration (s)`  |       number       | optional |         |
| `bg`            |       string       | optional | -       |
| `color`         |       string       | optional | -       |
| `opacityPoints` |      number[]      | optional | -       |
| `easing`        | Easing or Easing[] | optional | -       |
| `width`         |  string or number  | optional | "100%"  |
| `height`        |  string or number  | optional | "100%"  |
| `tabCount`      |       number       | optional | 3       |
| `tabWidth`      |  string or number  | optional | -       |
| `tabHeight`     |  string or number  | optional | '33%'   |

### ChartLoader

> Chart Skeleton Loader produced to use for chart components(in particularly bar charts).

```tsx
import { ChartLoader } from 'skeleton-react-loader'

const MyComponent = () => {
  return <ChartLoader height={400} />
}
```

### ChartLoaderProps

| property           |        type        |    \*    | default |
| ------------------ | :----------------: | :------: | ------- |
| `radius`           |       number       | optional | 12      |
| `padding`          |       number       | optional | 20      |
| `duration (s)`     |       number       | optional |         |
| `bg`               |       string       | optional | -       |
| `color`            |       string       | optional | -       |
| `opacityPoints`    |      number[]      | optional | -       |
| `easing`           | Easing or Easing[] | optional | -       |
| `width`            |  string or number  | optional | "100%"  |
| `height`           |  string or number  | optional | "100%"  |
| `barCount`         |       number       | optional | 3       |
| `barGap`           |  string or number  | optional | -       |
| `isEqualBarHeight` |      boolean       | optional | false   |

### CompactLoader

```tsx
import { CompactLoader } from 'skeleton-react-loader'

> CompactLoader is a special loader that contains all kind of loader in one component. Developer can arrange order and direction of components and modify them.

const MyComponent = () => {
  return <CompactLoader height={400} />
}
```

### CompactLoaderProps

| property              |         type         |    \*    | default                                  |
| --------------------- | :------------------: | :------: | ---------------------------------------- |
| `radius`              |        number        | optional | 12                                       |
| `direction`           |        number        | optional | column                                   |
| `stagRow`             |       boolean        | optional | false                                    |
| `elementGap`          |        number        | optional | -                                        |
| `duration (s)`        |        number        | optional |                                          |
| `bg`                  |        string        | optional | -                                        |
| `color`               |        string        | optional | -                                        |
| `easing`              |  Easing or Easing[]  | optional | -                                        |
| `rowCount`            |        number        | optional | -                                        |
| `rowGap`              |        number        | optional | -                                        |
| `rowOrder`            |        number        | optional | -                                        |
| `rowProps`            |   CompactRowProps    | optional | rowProps = { rowsWidth: '50%' }          |
| `barChartLoaderOrder` |        number        | optional |                                          |
| `barCharProps`        | CompactBarChartProps | optional | barChartProps = { barChartWidth: '50%' } |
| `circleLoaderSize`    |        number        | optional |                                          |
| `circleLoaderOrder`   |        number        | optional |                                          |
| `circleLoaderProps`   |     CircleProps      | optional |                                          |
| `imageLoaderOrder`    |        number        | optional |                                          |
| `imageSrc`            |        string        | optional |                                          |
| `imageLoaderProps`    |   imageLoaderProps   | optional |                                          |

> License: MIT
