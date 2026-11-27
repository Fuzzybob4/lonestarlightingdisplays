type Block = { type: "heading" | "paragraph"; text: string } | { type: "list"; items: string[] }

function parseBody(body: string): Block[] {
  const blocks: Block[] = []
  for (const chunk of body.replace(/\r\n/g, "\n").split(/\n\s*\n/)) {
    const lines = chunk.split("\n").map((line) => line.trim()).filter(Boolean)
    let paragraph: string[] = []
    let list: string[] = []
    const flush = () => {
      if (paragraph.length) blocks.push({ type: "paragraph", text: paragraph.join(" ") })
      if (list.length) blocks.push({ type: "list", items: list })
      paragraph = []
      list = []
    }
    for (const line of lines) {
      if (line.startsWith("## ")) {
        flush()
        blocks.push({ type: "heading", text: line.slice(3) })
      } else if (line.startsWith("- ")) {
        if (paragraph.length) {
          blocks.push({ type: "paragraph", text: paragraph.join(" ") })
          paragraph = []
        }
        list.push(line.slice(2))
      } else {
        if (list.length) {
          blocks.push({ type: "list", items: list })
          list = []
        }
        paragraph.push(line)
      }
    }
    flush()
  }
  return blocks
}

export function BlogBody({ body }: { body: string }) {
  return (
    <div className="mt-10 flex flex-col gap-5 text-lg leading-relaxed text-foreground/90">
      {parseBody(body).map((block, index) =>
        block.type === "heading" ? (
          <h2 key={index} className="mt-4 text-2xl font-bold tracking-tight text-foreground text-balance">
            {block.text}
          </h2>
        ) : block.type === "list" ? (
          <ul key={index} className="flex list-disc flex-col gap-2 pl-6">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        ) : (
          <p key={index} className="text-pretty">
            {block.text}
          </p>
        ),
      )}
    </div>
  )
}
