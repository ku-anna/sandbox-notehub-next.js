// app/@modal/(.)notes/[id]/page.tsx
// Додаємо модальне вікно до сторінки NotePreview.

import { getSingleNote } from "@/lib/api";
import Modal from "@/components/Modal/Modal";

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getSingleNote(id);

  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
};

export default NotePreview;

// Як це працює?

// Клік на нотатку → перехід на /notes/123
// Але замість нової сторінки відкривається модальне вікно
// Якщо перезавантажити або відкрити сторінку напряму – рендериться звичайна сторінка
