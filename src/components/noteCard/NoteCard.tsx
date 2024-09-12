import { Badge, Card, Stack } from "react-bootstrap"
import { SimplifiedNote } from "../../utils/types"
import styles from "./NoteCard.module.css"
import { Link } from "react-router-dom"

function NoteCard({ id, title, tags }: SimplifiedNote) {
  return (
    <Card
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
      as={Link}
      to={`/${id}`}
    >
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-5">{title}</span>
          {tags.length > 0 && (
            <Stack
              gap={1}
              direction="horizontal"
              className="justify-content-center flex-wrap"
            >
              {tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default NoteCard
