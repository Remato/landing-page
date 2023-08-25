type Props = {
  path: string
  alt?: string
}

function ImageComponent({ path, alt }: Props) {
  return (
    <div>
      <img src={path} alt={alt} className="object-contain" />
    </div>
  )
}

export default ImageComponent
