import ShowSingle from "./ShowSingle"

const Show = () => {
  const data = [
    {
      title: "Meet",
      para: "Make meetings impactful with Sync",
      src: "/meet.avif"
    },
    {
      title: "Call",
      para: "Make and receive calls directly in Sync",
      src: "/Call.avif"
    },
    {
      title: "Collaborate",
      para: "Create spaces that keep everyone in sync",
      src: "/Collaborate.avif"
    },
    {
      title: "Chat",
      para: "Be inclusive and connect quickly using emojis",
      src: "/chat.avif"
    },
  ]

  return (
    <div className="px-3 md:px-20 py-70 overflow-hidden">
      {data.map((el, i) => (
        <ShowSingle
          key={i}
          title={el.title}
          para={el.para}
          imgSrc={el.src}
          index={i}
        />
      ))}
    </div>
  )
}

export default Show
