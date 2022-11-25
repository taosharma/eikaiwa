import ImageBox from '../ImageBox'

export default function AboutSummary({ caption, image, text }) {
  return (
    <>
      <h3>{caption}</h3>
      <ImageBox image={image} />
      <p>{text}</p>
    </>
  )
}

AboutSummary.defaultProps = {
  caption: 'About Eikaiwa cafe',
  image:
    'https://www.teasenz.it/media/catalog/product/cache/8a22e548d0d598b598d00db33d60f0d4/c/a/cat-teapot-16.jpg',
  text: '今日私たちは英会話を話します。',
}
