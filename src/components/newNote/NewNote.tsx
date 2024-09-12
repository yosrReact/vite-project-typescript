import { NoteData, Tag } from "../../utils/types"
import NoteForm from "./../noteForm/NoteForm"
type Props = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

function NewNote({ onSubmit, onAddTag, availableTags }: Props) {
  return (
    <>
      <h1 className="mb-4">NewNote</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  )
}

export default NewNote
